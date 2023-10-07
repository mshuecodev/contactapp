import {View} from 'react-native';
import React, {FC} from 'react';
import {
  Modal,
  ModalBackdrop,
  ModalContent,
  ModalHeader,
  Heading,
  ModalCloseButton,
  Icon,
  ModalBody,
  ModalFooter,
  CloseIcon,
} from '@gluestack-ui/themed';

type ModalProps = {
  isOpen: Boolean;
  onClose: Boolean;
  ref: any;
  header: String;
  content: FC;
  footer: FC;
};

const ModalComponent = ({
  isOpen,
  onClose,
  ref,
  header,
  content,
  footer,
}: ModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} finalFocusRef={ref}>
      <ModalBackdrop />
      <ModalContent>
        <ModalHeader>
          <Heading size="lg">{header}</Heading>
          <ModalCloseButton>
            <Icon as={CloseIcon} />
          </ModalCloseButton>
        </ModalHeader>
        <ModalBody>{content}</ModalBody>
        <ModalFooter>{footer}</ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalComponent;
