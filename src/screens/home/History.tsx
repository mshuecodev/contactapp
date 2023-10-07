import {View, ScrollView, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import {Box, Fab, FabIcon, AddIcon} from '@gluestack-ui/themed';
import styles from 'themes/styles';
import colors from 'themes/color';

const HistoryScreen: FC = () => {
  return (
    <>
      <ScrollView style={styles.container}></ScrollView>
      <Box style={styles.btnStatic}>
        <Fab bg={colors.primary} size="lg">
          <FabIcon as={AddIcon} />
        </Fab>
      </Box>
    </>
  );
};

export default HistoryScreen;
