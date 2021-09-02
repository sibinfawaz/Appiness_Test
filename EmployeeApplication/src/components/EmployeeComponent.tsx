import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {user} from '../assets';
import colors from '../theme/color';

type EmployeeComponentProps = {
  employeeName: string;
  employeeEmail: string;
  onPressEmployee: () => void;
};

const EmployeeComponent = ({
  employeeName,
  employeeEmail,
  onPressEmployee,
}: EmployeeComponentProps) => {
  const name = employeeName.charAt(0).toUpperCase() + employeeName.slice(1);
  return (
    <TouchableOpacity style={styles.container} onPress={onPressEmployee}>
      <Image source={user} resizeMode={'cover'} style={styles.imageStyle} />
      <View style={styles.wrapper}>
        <Text style={styles.nameStyle}>{name}</Text>
        <Text style={styles.emailStyle}>{employeeEmail}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: colors.grey,
    marginBottom: 8,
    borderRadius: 6,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  wrapper: {
    flex: 1,
    marginVertical: 16,
    justifyContent: 'space-evenly',
  },
  nameStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.gradientStart,
  },
  imageStyle: {
    height: 100,
    width: 100,
    overflow: 'hidden',
  },
  emailStyle: {
    fontSize: 14,
    fontWeight: '800',
    color: colors.gradientEnd,
  },
});

export default EmployeeComponent;
