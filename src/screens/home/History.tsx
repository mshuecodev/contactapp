import {View, Text, ScrollView} from 'react-native';
import React, {FC} from 'react';
import styles from 'themes/styles';

const HistoryScreen: FC = () => {
  return (
    <ScrollView style={styles.container}>
      <Text>HistoryScreen</Text>
    </ScrollView>
  );
};

export default HistoryScreen;
