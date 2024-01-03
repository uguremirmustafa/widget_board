import { Setting, SettingGroup } from '../../types';

export const useSettings = (): SettingGroup[] => {
  const settings: Setting[] = [
    {
      id: '1',
      code: 'ACTIVE_WIDGETS',
      name: 'Active Widgets',
      typeCode: 'LIST_MULTI',
      value: 'Pomodoro,Timer',
      options: ['Pomodoro', 'Timer'],
      groupId: '1',
      groupName: 'Widget Settings',
    },
    {
      id: '2',
      code: 'MAX_WIDTH',
      name: 'Homepage container max width',
      typeCode: 'LIST_SINGLE',
      value: 'md',
      options: ['sm', 'md', 'lg', 'xl'],
      groupId: '2',
      groupName: 'Layout Settings',
    },
    {
      id: '3',
      code: 'WIDGETS_ENABLED',
      name: 'Widgets enabled',
      typeCode: 'BOOLEAN',
      value: false,
      options: [],
      groupId: '3',
      groupName: 'Feature Settings',
    },
    {
      id: '4',
      code: 'WIDGET_SECTION_TITLE',
      name: 'Widget section title',
      typeCode: 'STRING',
      value: 'Awesome widgets',
      options: [],
      groupId: '1',
      groupName: 'Widget Settings',
    },
    {
      id: '5',
      code: 'DEVPLATFORM_TOKEN',
      name: 'Devplatform token',
      typeCode: 'STRING',
      value: '',
      options: [],
      groupId: '4',
      groupName: 'Auth',
    },
  ];

  const settingGroups: SettingGroup[] = settings.reduce((acc, cur) => {
    const groupIndex = acc.findIndex((group) => group.groupId === cur.groupId);

    if (groupIndex === -1) {
      acc.push({
        groupId: cur.groupId,
        groupName: cur.groupName,
        settings: [cur],
      });
    } else {
      acc[groupIndex].settings.push(cur);
    }

    return acc;
  }, [] as SettingGroup[]);

  return settingGroups;
};
