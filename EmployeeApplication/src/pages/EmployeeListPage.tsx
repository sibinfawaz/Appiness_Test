import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  BackHandler,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector} from 'react-redux';
import {RootState} from '../store/index';
import useBackHandler from '../services/BackHandlerHook';
import colors from '../theme/color';
import {Dimensions} from 'react-native';
import {employees} from '../assets';

const EmployeeListPage = ({navigation}: any) => {
  const employeeList = useSelector(
    (state: RootState) => state.employeeData.value,
  );
  useEffect(() => {
    console.warn(employeeList);
  });

  const deviceBack = () => {
    BackHandler.exitApp();
  };
  useBackHandler(deviceBack);

  //   const onSelectRestaurant = (item: Object) => {
  //     navigation.navigate('RestaurantDetailsPage', {selectedRestaurant: item});
  //     setSearchArray([]);
  //     setSearchVal('');
  //   };

  //   const renderRestaurant = item => {
  //     let currentRestaurant = item?.item;
  //     return (
  //       <RestaurantComponent
  //         restaurantName={currentRestaurant.name}
  //         restaurantAddress={currentRestaurant.address}
  //         onPressRestaurant={() => onSelectRestaurant(currentRestaurant)}
  //       />
  //     );
  //   };

  //   const onSearch = item => {
  //     navigation.navigate('SearchPage', {lat: item.lat, lng: item.lng});
  //     setSearchArray([]);
  //     setSearchVal('');
  //   };

  //   const renderList = item => {
  //     const currentItem = item?.item;
  //     return (
  //       <TouchableOpacity
  //         style={styles.searchList}
  //         onPress={() => onSearch(currentItem)}>
  //         <Text
  //           numberOfLines={1}
  //           ellipsizeMode={'tail'}
  //           style={{marginBottom: 1, marginTop: 8}}>
  //           {currentItem.place}
  //         </Text>
  //       </TouchableOpacity>
  //     );
  //   };

  //   const renderFlatList = () => {
  //     return (
  //       <FlatList
  //         data={searchArray}
  //         renderItem={renderList}
  //         showsVerticalScrollIndicator={false}
  //         removeClippedSubviews={false}
  //         contentContainerStyle={{zIndex: 555}}
  //         keyboardShouldPersistTaps={'always'}
  //       />
  //     );
  //   };

  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <LinearGradient
          colors={[colors.gradientStart, colors.gradientEnd]}
          style={styles.headerStyle}>
          <Text style={styles.headerTextStyle}> Workman</Text>
          <Image
            source={employees}
            resizeMode="cover"
            style={styles.imageStyle}
          />
        </LinearGradient>
        {/* <FlatList
            data={restaurantList}
            renderItem={renderRestaurant}
            style={styles.flatListStyle}
            ListFooterComponent={() => {
              return <View style={styles.footer} />;
            }}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps={'always'}
          /> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerStyle: {
    height: 140,
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 8,
  },
  headerTextStyle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.white,
  },
  textStyle: {
    fontSize: 24,
    fontWeight: '900',
    color: colors.white,
  },
  imageStyle: {
    height: 60,
    width: 60,
  },
  flatListStyle: {
    marginTop: 32,
    padding: 8,
  },
  footer: {
    height: 24,
  },
  searchBarViewStyle: {
    width: '75%',
    height: 40,
    position: 'absolute',
    top: 120,
    left:
      (Dimensions.get('window').width - Dimensions.get('window').width * 0.75) /
      2,
  },
  textInputStyle: {
    backgroundColor: colors.white,
    elevation: 2,
    borderRadius: 6,
    paddingHorizontal: 12,
  },
  autoPopulateView: {
    flexGrow: 1,
  },
  searchList: {
    backgroundColor: colors.white,
    width: '100%',
    height: 40,
    marginTop: 4,
  },
});

export default EmployeeListPage;
