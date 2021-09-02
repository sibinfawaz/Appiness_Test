import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoadingPage from './LoadingPage';
import EmployeeListPage from './EmployeeListPage';
import LoginPage from './LoginPage';
import EmployeeProfilePage from './EmployeeProfilePage';

const Stack = createStackNavigator();

function AppNavigation(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'LoadingPage'}
        screenOptions={{
          headerShown: false,
          animationEnabled: false,
        }}>
        <Stack.Screen name="LoadingPage" component={LoadingPage} />
        <Stack.Screen name="EmployeeListPage" component={EmployeeListPage} />
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen
          name="EmployeeProfilePage"
          component={EmployeeProfilePage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default AppNavigation;
