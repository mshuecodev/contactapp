import {ScrollView, Pressable} from 'react-native';
import React, {FC} from 'react';
import {
  Input,
  Box,
  InputSlot,
  InputField,
  InputIcon,
  SearchIcon,
  Text,
  HStack,
  Avatar,
  AvatarFallbackText,
  Button,
  ButtonText,
  ButtonIcon,
  AddIcon,
  EditIcon,
  FabIcon,
  Fab,
} from '@gluestack-ui/themed';

import styles from 'themes/styles';

const ContactScreen: FC = ({navigation}: any) => {
  const onAdd = () => {
    navigation.navigate('ContactForm');
  };

  const onClickItem = () => {
    console.log('onpress item');
  };

  const onLongPressItem = () => {
    console.log('on long press item');
  };
  return (
    <>
      <ScrollView style={styles.container}>
        <Box m={10}>
          <Box>
            <Input>
              <InputSlot pl="$3">
                <InputIcon as={SearchIcon} />
              </InputSlot>
              <InputField placeholder="Search..." />
            </Input>
          </Box>

          <Box my={10}>
            {data &&
              data?.map((item, index) => (
                <Pressable onPress={onClickItem} onLongPress={onLongPressItem}>
                  <HStack space="md" key={index} my={10}>
                    <Avatar bgColor="$amber600" size="md" borderRadius="$full">
                      <AvatarFallbackText>{item.name}</AvatarFallbackText>
                    </Avatar>
                    <Box>
                      <Text>{item.name}</Text>
                      <Text>{item.phoneNumber}</Text>
                    </Box>
                  </HStack>
                </Pressable>
              ))}
          </Box>
        </Box>
      </ScrollView>

      {/* static button */}
      <Box style={styles.btnStatic}>
        {/* <Button
          size="lg"
          variant="solid"
          action="primary"
          borderRadius="$full"
          bg="#6b59f2">
          <ButtonIcon as={AddIcon} />
        </Button> */}
        <Fab bg="#6b59f2" size="lg" onPress={onAdd}>
          <FabIcon as={AddIcon} />
        </Fab>
      </Box>
    </>
  );
};

export default ContactScreen;

const data = [
  {
    id: 1,
    name: 'MS HuecoDev',
    phoneNumber: '00000000',
    Avatar: 'MS',
  },
  {
    id: 2,
    name: 'MS HuecoDev 1',
    phoneNumber: '00000000',
    Avatar: 'MS1',
  },
  {
    id: 3,
    name: 'MS HuecoDev 2',
    phoneNumber: '00000000',
    Avatar: 'MS2',
  },
  {
    id: 4,
    name: 'MS HuecoDev 3',
    phoneNumber: '00000000',
    Avatar: 'MS3',
  },
];
