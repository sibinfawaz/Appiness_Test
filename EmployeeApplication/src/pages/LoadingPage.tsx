import React, {useEffect} from 'react';
import {StyleSheet, Text, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {employees} from '../assets';
import colors from '../theme/color';
import {useDispatch} from 'react-redux';
import loginCredentials from '../services/loginCredentials.json';
import employeeList from '../services/employeeList.json';
import {addLogin} from '../store/LoginSlice';
import {addEmployee} from '../store/EmployeeSlice';

const LoadingPage = ({navigation}: any) => {
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(addLogin(loginCredentials.login));
      dispatch(addEmployee(employeeList.user));
      navigation.navigate('EmployeeListPage');
    }, 3000);
  }, []);
  return (
    <LinearGradient
      colors={[colors.gradientStart, colors.gradientEnd]}
      style={styles.container}>
      <Image source={employees} resizeMode="cover" style={styles.imageStyle} />
      <Text style={styles.textStyle}> Workman</Text>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    height: 80,
    width: 80,
  },
  textStyle: {
    fontSize: 24,
    fontWeight: '900',
    color: colors.white,
  },
});

export default LoadingPage;
