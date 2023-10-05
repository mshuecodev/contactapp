import {View} from 'react-native';
import React, {FC} from 'react';
import {
  Popover,
  PopoverBackdrop,
  PopoverContent,
  PopoverHeader,
  PopoverCloseButton,
  PopoverBody,
  PopoverFooter,
  Icon,
  CloseIcon,
  Text,
  Button,
  ButtonText,
  Heading,
} from '@gluestack-ui/themed';

type ModalProps = {
  isOpen: Boolean;
  onClose: Boolean;
  ref: any;
  header: FC;
  content: FC;
  footer: FC;
  onOpen: any;
  placement: 'bottom';
  trigger: FC;
  size: 'md';
};

const PopOverComponent = ({
  isOpen,
  onOpen,
  onClose,
  ref,
  header,
  content,
  footer,
  trigger,
  placement,
  size,
}: ModalProps) => {
  return (
    <Popover
      isOpen={isOpen}
      onClose={onClose}
      onOpen={onOpen}
      placement={placement}
      size={size}
      trigger={trigger}>
      <PopoverBackdrop />
      <PopoverContent>
        {header && <PopoverHeader>{header}</PopoverHeader>}
        {content && <PopoverBody>{content}</PopoverBody>}
        {footer && <PopoverFooter>{footer}</PopoverFooter>}
      </PopoverContent>
    </Popover>
  );
};

export default PopOverComponent;
