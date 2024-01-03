import React from 'react';
import { ModalProps, useModal } from '../../context/ModalContext';
import { Dialog, DialogContent, DialogTitle, Divider, IconButton } from '@mui/material';
import { Icon } from '@iconify/react/dist/iconify.js';

const ModalManager: React.FC = () => {
  const { modals, closeModalAtIndex } = useModal();

  return (
    <div>
      {modals.map(({ body, title, size }, index) => (
        <ModalComponent
          key={index}
          onClose={() => closeModalAtIndex(index)}
          body={body}
          title={title}
          size={size}
        />
      ))}
    </div>
  );
};

export default ModalManager;

type ModalComponentProps = ModalProps & {
  onClose: () => void;
};

function ModalComponent(props: ModalComponentProps) {
  const { onClose, body, title, size } = props;
  const { closeModal } = useModal();
  return (
    <Dialog open={true} onClose={onClose} fullWidth maxWidth={size}>
      <DialogTitle>{title}</DialogTitle>
      <Divider />
      <IconButton
        aria-label="close"
        onClick={closeModal}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <Icon icon="line-md:close-small" />
      </IconButton>
      <DialogContent>{body}</DialogContent>
    </Dialog>
  );
}
