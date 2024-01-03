import { Box, Divider, Fade, Grid, Paper, Stack, Tab, Tabs, Typography } from '@mui/material';
import { useSettings } from '../lib/api/settings';
import { ReactNode, useState } from 'react';
import { SettingGroup } from '../types';
import SettingForm from '../components/form/SettingForm';

function a11yProps(groupId: SettingGroup['groupId']) {
  return {
    id: `vertical-tab-${groupId}`,
    'aria-controls': `vertical-tabpanel-${groupId}`,
  };
}

interface TabPanelProps {
  children: ReactNode;
  id: SettingGroup['groupId'];
  group: SettingGroup;
}
function TabPanel(props: TabPanelProps) {
  const { children, group, id, ...other } = props;

  return (
    <Box
      sx={{ width: '100%' }}
      role="tabpanel"
      hidden={group?.groupId !== id}
      id={`vertical-tabpanel-${id}`}
      aria-labelledby={`vertical-tab-${id}`}
      {...other}
    >
      <Fade in={group?.groupId === id} timeout={500}>
        <Box sx={{ px: 4, py: 5, width: '100%' }}>{children}</Box>
      </Fade>
    </Box>
  );
}
function SettingsPage(): JSX.Element {
  const settingGroups = useSettings();

  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(
    settingGroups && settingGroups.length > 0 ? 0 : -1
  );

  const handleTabChange = (_e: React.SyntheticEvent, newValue: number) => {
    setSelectedTabIndex(newValue);
  };
  return (
    <Paper>
      <Stack>
        <Typography variant="h1" sx={{ p: 2 }}>
          Settings
        </Typography>
        <Divider orientation="horizontal" />
        <Box
          sx={{
            flexGrow: 1,
            display: 'flex',
            height: `calc(100vh - 9rem)`,
          }}
        >
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={selectedTabIndex}
            onChange={handleTabChange}
            aria-label="Settings"
            sx={{
              borderRight: 1,
              borderColor: 'divider',
              minWidth: '250px',
              py: 2,
            }}
          >
            {settingGroups.map((x) => {
              return <Tab key={x.groupId} label={x.groupName} {...a11yProps(x.groupId)} />;
            })}
          </Tabs>
          {settingGroups.map((x) => {
            return (
              <TabPanel key={x.groupId} group={settingGroups[selectedTabIndex]} id={x.groupId}>
                <Grid container>
                  <Grid item md={4} xs={12}>
                    <SettingForm items={x.settings} />
                  </Grid>
                </Grid>
              </TabPanel>
            );
          })}
        </Box>
      </Stack>
    </Paper>
  );
}

export default SettingsPage;
