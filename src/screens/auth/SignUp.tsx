import React, {FC} from 'react';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  Box,
  Input,
  InputField,
  Center,
  VStack,
  Heading,
  Text,
  Button,
  ButtonText,
} from '@gluestack-ui/themed';

type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};
type Props = NativeStackScreenProps<RootStackParamList>;

const SignUpScreen = ({navigation}: Props) => {
  const onSignIn = () => {
    navigation.navigate('SignIn');
  };
  return (
    <Box flex={1} justifyContent="center">
      <Box m={20}>
        <VStack mb={20} alignItems="center">
          <Text>Welcome</Text>
          <Heading>Create Account</Heading>
        </VStack>
        <VStack space="md" width={'100%'}>
          <Input variant="outline" size="md">
            <InputField placeholder="Email Address" />
          </Input>
          <Input variant="outline" size="md">
            <InputField placeholder="Username" />
          </Input>
          <Input variant="outline" size="md">
            <InputField placeholder="Password" />
          </Input>
          <Input variant="outline" size="md">
            <InputField placeholder="Re-Type Password" />
          </Input>
          <Button size="md" variant="solid" action="primary">
            <ButtonText>Submit</ButtonText>
          </Button>
        </VStack>
      </Box>
      <Box alignItems="center" position="absolute" bottom={5} width={'100%'}>
        <Text>Already have an account?</Text>
        <Button size="md" variant="link" action="primary" onPress={onSignIn}>
          <ButtonText>Sign in to your account</ButtonText>
        </Button>
      </Box>
    </Box>
  );
};

export default SignUpScreen;
