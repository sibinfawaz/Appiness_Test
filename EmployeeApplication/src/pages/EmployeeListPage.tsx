import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  BackHandler,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector} from 'react-redux';
import {RootState} from '../store/index';
import useBackHandler from '../services/BackHandlerHook';
import colors from '../theme/color';
import {employees} from '../assets';
import EmployeeComponent from '../components/EmployeeComponent';
import {DIMENSION} from '../constants/StyleConstants';

const EmployeeListPage = ({navigation}: any) => {
  const employeeList = useSelector(
    (state: RootState) => state.employeeData.value,
  );

  const deviceBack = () => {
    BackHandler.exitApp();
  };
  useBackHandler(deviceBack);

  const [searchValue, setSearchValue] = useState('');
  const [searchEmployeeData, setSearchEmployeeData] = useState([]);

  useEffect(() => {
    let tempData = [...employeeList];
    const tempSArray: any = tempData.filter(
      item =>
        item?.name.toLowerCase().match(searchValue.toLowerCase()) ||
        item?.email.toLowerCase().startsWith(searchValue.toLowerCase()),
    );
    setSearchEmployeeData(tempSArray);
  }, [employeeList, searchValue]);

  const onSelectEmployee = (item: Object) => {
    navigation.navigate('EmployeeProfilePage', {selectedEmployee: item});
    setSearchEmployeeData([]);
    setSearchValue('');
  };

  const renderEmployeeList = item => {
    let currentEmployee = item?.item;
    return (
      <EmployeeComponent
        employeeName={currentEmployee.name}
        employeeEmail={currentEmployee.email}
        onPressEmployee={() => onSelectEmployee(currentEmployee)}
      />
    );
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <LinearGradient
          colors={[colors.gradientStart, colors.gradientEnd]}
          style={styles.headerStyle}>
          <View style={styles.headerTop}>
            <Text style={styles.headerTextStyle}> Workman</Text>
            <Image
              source={employees}
              resizeMode="cover"
              style={styles.imageStyle}
            />
          </View>
          <View style={styles.searchContainer}>
            <TextInput
              value={searchValue}
              onChangeText={setSearchValue}
              placeholder={'Search...'}
              style={{color: colors.white}}
              placeholderTextColor={colors.searchPlaceholder}
              selectionColor={colors.searchPlaceholder}
            />
          </View>
        </LinearGradient>
        <FlatList
          data={searchValue === '' ? employeeList : searchEmployeeData}
          renderItem={renderEmployeeList}
          style={styles.flatListStyle}
          ListEmptyComponent={() => {
            return (
              <View style={styles.emptyStyle}>
                <Text>No Items</Text>
              </View>
            );
          }}
          ListFooterComponent={() => {
            return <View style={styles.footer} />;
          }}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps={'handled'}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerStyle: {
    height: DIMENSION.screenHeight / 3,
    width: '100%',
    alignItems: 'center',
    padding: 8,
  },
  headerTop: {
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  searchContainer: {
    borderColor: colors.white,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    height: 42,
    width: '100%',
  },
  headerTextStyle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.white,
  },
  imageStyle: {
    height: 60,
    width: 60,
  },
  flatListStyle: {
    marginTop: 8,
    padding: 8,
  },
  footer: {
    height: 24,
  },
  emptyStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default EmployeeListPage;
