import {ScrollView, View} from 'react-native';
import React, {FC} from 'react';
import {
  Text,
  HStack,
  CloseIcon,
  CheckIcon,
  Button,
  ButtonIcon,
  Box,
  Heading,
  VStack,
  Icon,
  Avatar,
  Input,
  InputField,
  Pressable,
} from '@gluestack-ui/themed';
import {User, ChevronRight} from 'lucide-react-native';
import styles from 'themes/styles';

const ContactFormScreen: FC = ({navigation}: any) => {
  const onClickGroup = () => {
    navigation.navigate('GroupForm');
  };
  const onClose = () => {
    navigation.goBack();
  };
  return (
    <>
      <View style={styles.container}>
        <Box m={10}>
          <HStack justifyContent="space-between" alignItems="center">
            <Button size="md" variant="link" onPress={onClose}>
              <ButtonIcon
                as={CloseIcon}
                width={38}
                height={38}
                color="#6b59f2"
              />
            </Button>
            <Heading>Save Contact</Heading>
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
          <VStack space={'md'}>
            <Box alignItems="center">
              <Avatar width={80} height={80}>
                <Icon as={User} color="white" size="xl" />
              </Avatar>
            </Box>
            <Input variant="outline" size="md">
              <InputField placeholder="Full Name" />
            </Input>
            <Input variant="outline" size="md">
              <InputField placeholder="Company" />
            </Input>
            <Input variant="outline" size="md">
              <InputField placeholder="Phone Number" />
            </Input>

            <Pressable onPress={onClickGroup}>
              <HStack justifyContent="space-between" alignItems="center">
                <Text color="#6b59f2">Group Name</Text>
                <Icon as={ChevronRight} color="#6b59f2" />
              </HStack>
            </Pressable>
          </VStack>
        </Box>
      </ScrollView>
    </>
  );
};

export default ContactFormScreen;
