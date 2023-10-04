import {View, Text} from 'react-native';
import React, {FC} from 'react';
import {Spinner, Box} from '@gluestack-ui/themed';

const SplashScreen: FC = () => {
  return (
    <Box sx={{justifyContent: 'center', flex: 1}}>
      <Spinner />
    </Box>
  );
};

export default SplashScreen;
