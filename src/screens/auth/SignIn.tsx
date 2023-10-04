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

const SignInScreen = ({navigation}: Props) => {
  const onSignUp = () => {
    navigation.navigate('SignUp');
  };
  return (
    <Box flex={1} justifyContent="center">
      <Box m={20}>
        <VStack mb={20} alignItems="center">
          <Text>Welcome Back!</Text>
          <Heading>Sign In</Heading>
        </VStack>
        <VStack space="md" width={'100%'}>
          <Input variant="outline" size="md">
            <InputField placeholder="Username" />
          </Input>
          <Input variant="outline" size="md">
            <InputField placeholder="Password" />
          </Input>
          <Button size="md" variant="solid" action="primary">
            <ButtonText>Sign In</ButtonText>
          </Button>
          <Button size="md" variant="link" action="primary">
            <ButtonText>Forgot your password?</ButtonText>
          </Button>
        </VStack>
      </Box>
      <Box alignItems="center" position="absolute" bottom={5} width={'100%'}>
        <Text>Don’t have an account yet?</Text>
        <Button size="md" variant="link" action="primary" onPress={onSignUp}>
          <ButtonText>Sign Up</ButtonText>
        </Button>
      </Box>
    </Box>
  );
};

export default SignInScreen;
