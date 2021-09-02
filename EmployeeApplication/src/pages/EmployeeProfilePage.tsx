import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {backArrow, call} from '../assets';
import ListComponent from '../components/ListComponent';
import {DIMENSION} from '../constants/StyleConstants';
import useBackHandler from '../services/BackHandlerHook';
import colors from '../theme/color';
import Communications from 'react-native-communications';

const EmployeeProfilePage = ({route, navigation}: any) => {
  let employee = route?.params?.selectedEmployee;

  const deviceBack = () => {
    navigation.goBack();
  };
  useBackHandler(deviceBack);

  const renderEmployeeDetails = () => {
    let newEmployeeObject = {...employee};
    delete newEmployeeObject['name'];
    let newArray = Object.entries(newEmployeeObject);
    return newArray.map((item, index) => {
      return (
        <ListComponent headText={item[0]} tailText={item[1]} key={index} />
      );
    });
  };

  const name = employee.name.charAt(0).toUpperCase() + employee.name.slice(1);
  return (
    <>
      <TouchableOpacity onPress={deviceBack} style={styles.backArrowStyle}>
        <Image source={backArrow} style={styles.image} />
      </TouchableOpacity>
      <View style={styles.container}>
        <LinearGradient
          colors={[colors.gradientStart, colors.gradientEnd]}
          style={styles.headerStyle}>
          <Text style={styles.headerTextStyle}>{name}</Text>
          <TouchableOpacity
            style={styles.callContainer}
            onPress={() => Communications.phonecall(employee.phoneNo, true)}>
            <Image source={call} style={styles.callImage} />
          </TouchableOpacity>
        </LinearGradient>
        <ScrollView contentContainerStyle={styles.wrapper}>
          {renderEmployeeDetails()}
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerStyle: {
    height: DIMENSION.screenHeight / 3,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    flexDirection: 'row',
    padding: 8,
  },
  headerTextStyle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.white,
    marginLeft: 16,
    marginTop: 40,
  },
  callContainer: {
    backgroundColor: colors.gradientStart,
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 24,
  },
  image: {
    width: 24,
    height: 24,
  },
  callImage: {
    width: 24,
    height: 24,
  },
  backArrowStyle: {
    width: 24,
    height: 24,
    position: 'absolute',
    top: 20,
    left: 16,
    zIndex: 555,
  },
  wrapper: {
    padding: 8,
  },
});

export default EmployeeProfilePage;
