import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  BackHandler,
  TouchableOpacity,
  ScrollView,
  Keyboard,
  AppState,
} from 'react-native';
import {useSelector} from 'react-redux';
import {login} from '../assets';
import LabelInput from '../components/LabelInput';
import {RootState} from '../store/index';
import useBackHandler from '../services/BackHandlerHook';
import {DIMENSION, PLATFORMS} from '../constants/StyleConstants';
import colors from '../theme/color';
import LinearGradient from 'react-native-linear-gradient';
import {validate} from '../services/ValidationService';

const LoginPage = ({navigation}: any) => {
  const deviceBack = () => {
    BackHandler.exitApp();
  };
  useBackHandler(deviceBack);

  const loginCred = useSelector((state: RootState) => state.loginData.value);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [validationLoginError, setValidationLoginError] = useState({
    userName: '',
    password: '',
  });
  const [keyboardShown, setKeyboardShown] = React.useState(true);

  useEffect(() => {
    const showSubscription = Keyboard.addListener(
      'keyboardDidShow',
      _keyboardDidShow,
    );
    const hideSubscription = Keyboard.addListener(
      'keyboardDidHide',
      _keyboardDidHide,
    );
    AppState.addEventListener('change', _handleAppStateChange);
    return () => {
      showSubscription.remove();
      hideSubscription.remove();
      AppState.removeEventListener('change', _handleAppStateChange);
    };
  }, []);

  const _keyboardDidShow = () => {
    if (PLATFORMS.ANDROID) {
      setKeyboardShown(false);
    }
  };

  const _handleAppStateChange = () => {
    if (AppState.currentState.match(/inactive|background/)) {
      Keyboard.dismiss();
    }
  };

  const _keyboardDidHide = () => {
    setKeyboardShown(true);
  };

  const onLoginPress = () => {
    Keyboard.dismiss();
    const validateData = {
      userName: {
        type: 'required',
        value: userName,
        checkValue: loginCred.username,
        error: 'Please enter correct email',
      },
      password: {
        type: 'required',
        value: password,
        checkValue: loginCred.password,
        error: 'Please enter correct password',
      },
    };
    setValidationLoginError(validate(validateData));
    if (Object.keys(validate(validateData)).length === 0) {
      navigation.navigate('EmployeeListPage');
    }
  };

  return (
    <ScrollView
      keyboardShouldPersistTaps={'handled'}
      contentContainerStyle={{
        paddingBottom: !keyboardShown ? 300 : 0,
        flexGrow: 1,
      }}>
      <View style={styles.headerWrapper}>
        <Image source={login} resizeMode="cover" style={styles.imageStyle} />
      </View>
      <View style={styles.formWrapper}>
        <LabelInput
          label={'email'}
          value={userName}
          onChangeVal={setUserName}
          errMsg={validationLoginError.userName}
          keyBoardType={'email-address'}
        />
        <LabelInput
          label={'password'}
          value={password}
          onChangeVal={setPassword}
          passwordField={true}
          errMsg={validationLoginError.password}
        />
        <TouchableOpacity style={styles.container} onPress={onLoginPress}>
          <LinearGradient
            colors={[colors.gradientStart, colors.gradientEnd]}
            style={styles.loginButton}>
            <Text> Login</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerWrapper: {
    marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
    height: DIMENSION.screenHeight / 5,
  },
  formWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    height: 80,
    width: 80,
  },
  loginButton: {
    marginVertical: 32,
    width: DIMENSION.screenWidth - 48,
    justifyContent: 'center',
    alignItems: 'center',
    height: 44,
    borderRadius: 4,
  },
});
export default LoginPage;
