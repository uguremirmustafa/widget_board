import { DialogProps } from '@mui/material';
import React, { createContext, useState, useContext, ReactNode } from 'react';

export type ModalProps = {
  title: string;
  body: React.ReactNode;
  size: DialogProps['maxWidth'];
};

interface ModalContextProps {
  modals: ModalProps[];
  openModal: (content: ModalProps) => void;
  closeModal: () => void;
  closeModalAtIndex: (index: number) => void;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};

export const ModalProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [modals, setModals] = useState<ModalProps[]>([]);

  const openModal = (content: ModalProps) => {
    setModals([...modals, content]);
  };

  const closeModal = () => {
    setModals(modals.slice(0, -1));
  };

  const closeModalAtIndex = (index: number) => {
    setModals(modals.filter((_, i) => i !== index));
  };

  const modalContextValue: ModalContextProps = {
    modals,
    openModal,
    closeModal,
    closeModalAtIndex,
  };

  return <ModalContext.Provider value={modalContextValue}>{children}</ModalContext.Provider>;
};
