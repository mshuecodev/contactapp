import {ScrollView, View} from 'react-native';
import React, {FC, useState, useRef} from 'react';
import {
  Text,
  HStack,
  CloseIcon,
  CheckIcon,
  Button,
  ButtonText,
  ButtonIcon,
  Box,
  Heading,
  VStack,
  Icon,
  Avatar,
  Input,
  InputField,
  Pressable,
  Checkbox,
  CheckboxLabel,
  CheckboxIndicator,
  CheckboxIcon,
  Fab,
  FabIcon,
  FabLabel,
  AddIcon,
} from '@gluestack-ui/themed';
import {User, ChevronRight} from 'lucide-react-native';
import Modal from 'components/Modal';

import styles from 'themes/styles';

const GroupFormScreen: FC = ({navigation}: any) => {
  const [showModal, setShowModal] = useState(false);

  const ref = useRef(null);

  const onCloseGroup = () => {
    navigation.goBack();
  };

  const onAdd = () => {
    setShowModal(true);
  };

  const onCloseModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <View style={styles.container}>
        <Box m={10}>
          <HStack justifyContent="space-between" alignItems="center">
            <Button size="md" variant="link" onPress={onCloseGroup}>
              <ButtonIcon
                as={CloseIcon}
                width={38}
                height={38}
                color="#6b59f2"
              />
            </Button>
            <Heading>List Group</Heading>
            <Button size="md" variant="link">
              <ButtonIcon
                as={CheckIcon}
                width={38}
                height={38}
                color="#6b59f2"
              />
            </Button>
          </HStack>
        </Box>
      </View>

      <ScrollView style={styles.container}>
        <Box m={10}>
          <Box>
            <Heading>Select Group</Heading>
          </Box>
          <VStack space={'md'}>
            {data &&
              data.map((item, index) => (
                <Checkbox justifyContent="space-between" value="Jane">
                  <CheckboxLabel>{item.name}</CheckboxLabel>
                  <CheckboxIndicator>
                    <CheckboxIcon as={CheckIcon} />
                  </CheckboxIndicator>
                </Checkbox>
              ))}
          </VStack>
        </Box>
      </ScrollView>
      <Box style={styles.btnStatic}>
        <Fab bg="#6b59f2" size="lg" onPress={onAdd}>
          <FabIcon as={AddIcon} />
        </Fab>
      </Box>

      <Modal
        isOpen={showModal}
        onClose={onCloseModal}
        ref={ref}
        header="Create new group"
        content={
          <Input variant="outline" size="md">
            <InputField placeholder="Group Name" />
          </Input>
        }
        footer={
          <>
            <Button
              variant="outline"
              size="sm"
              action="negative"
              mr="$3"
              onPress={onCloseModal}>
              <ButtonText>Cancel</ButtonText>
            </Button>
            <Button
              size="sm"
              action="primary"
              borderWidth="$0"
              onPress={onCloseModal}>
              <ButtonText>OK</ButtonText>
            </Button>
          </>
        }
      />
    </>
  );
};

export default GroupFormScreen;

const data = [
  {
    id: 1,
    name: 'Group A',
  },
  {
    id: 2,
    name: 'Group B',
  },
  {
    id: 3,
    name: 'Group C',
  },
];
