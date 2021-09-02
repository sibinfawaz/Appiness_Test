import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from '../theme/color';

type ListComponentProps = {
  headText?: string;
  tailText?: any;
};

const ListComponent = ({headText, tailText}: ListComponentProps) => {
  const headName = headText!.charAt(0).toUpperCase() + headText!.slice(1);

  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text>{headName} </Text>
      </View>
      <View style={styles.tail}>
        <Text>{tailText ? tailText : ''}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 8,
    minHeight: 40,
  },
  head: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  tail: {
    flex: 2,
    paddingHorizontal: 8,
    backgroundColor: colors.grey,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});
export default ListComponent;
