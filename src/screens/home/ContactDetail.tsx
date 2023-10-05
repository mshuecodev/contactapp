import {ScrollView} from 'react-native';
import React, {FC} from 'react';
import {
  Text,
  Box,
  HStack,
  Icon,
  Button,
  ButtonIcon,
  EditIcon,
  ChevronLeftIcon,
  Pressable,
  Avatar,
  VStack,
  Heading,
} from '@gluestack-ui/themed';
import {
  MoreVertical,
  ChevronLeft,
  User,
  Phone,
  MessageSquare,
  Mail,
  Heart,
  Ban,
} from 'lucide-react-native';
import styles from 'themes/styles';

const ContactDetail: FC = ({navigation}: any) => {
  const onClickBack = () => {
    navigation.goBack();
  };

  return (
    <>
      <Box style={styles.container} flex={1}>
        <Box p={10}>
          <HStack justifyContent="space-between" alignItems="center">
            <Pressable onPress={onClickBack}>
              <ChevronLeft width={32} height={32} color="#6b59f2" />
            </Pressable>
            <Pressable>
              <MoreVertical width={32} height={32} color="#6b59f2" />
            </Pressable>
          </HStack>
        </Box>

        <Box m={10}>
          {/* avatar section */}
          <Box
            position="absolute"
            zIndex={1}
            // backgroundColor="red"
            top={10}
            alignSelf="center">
            <Avatar width={80} height={80}>
              <Icon as={User} color="white" size="xl" />
            </Avatar>
          </Box>

          {/* card section */}
          <Box mt={60}>
            <Box
              bg="$primary100"
              softShadow="4"
              borderColor="$primary500"
              width={'70%'}
              alignSelf="center"
              alignItems="center"
              borderRadius={20}>
              <Box p={5}>
                <VStack mt={30} alignItems="center">
                  <Heading>MS HuecoDev</Heading>
                  <Text>+62 0000 0000</Text>
                </VStack>
                <HStack my={10} space="md">
                  <Button
                    borderRadius="$full"
                    size="lg"
                    bg="$indigo600"
                    borderColor="$indigo600">
                    <ButtonIcon as={MessageSquare} />
                  </Button>
                  <Button
                    borderRadius="$full"
                    size="lg"
                    bg="$indigo600"
                    borderColor="$indigo600">
                    <ButtonIcon as={Phone} />
                  </Button>
                  <Button
                    borderRadius="$full"
                    size="lg"
                    bg="$indigo600"
                    borderColor="$indigo600">
                    <ButtonIcon as={Mail} />
                  </Button>
                </HStack>
              </Box>
            </Box>
          </Box>

          {/* detail section */}
          <Box my={20}>
            <VStack space="md">
              <Box>
                <Text>Address</Text>
                <Text>Jl. Hueco Mundo</Text>
              </Box>
              <Box>
                <Text>Email</Text>
                <Text>hc@mail.com</Text>
              </Box>
            </VStack>
          </Box>
        </Box>

        {/* footer section */}

        <Box flex={1} justifyContent="flex-end" m={10} alignItems="center">
          <HStack space="lg">
            <Button
              borderRadius="$full"
              size="lg"
              variant="link"
              //   bg="$indigo600"
              //   borderColor="$indigo600"
            >
              <ButtonIcon as={Heart} color="gray" size="xl" />
            </Button>
            <Button
              variant="link"
              borderRadius="$full"
              size="lg"
              //   bg="$indigo600"
              //   borderColor="$indigo600"
            >
              <ButtonIcon as={EditIcon} color="gray" size="xl" />
            </Button>
            <Button
              variant="link"
              borderRadius="$full"
              size="lg"
              //   bg="$indigo600"
              //   borderColor="$indigo600"
            >
              <ButtonIcon as={Ban} color="gray" size="xl" />
            </Button>
          </HStack>
        </Box>
      </Box>
    </>
  );
};

export default ContactDetail;
