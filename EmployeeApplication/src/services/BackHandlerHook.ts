import {useCallback} from 'react';
import {BackHandler} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

function useBackHandler(handler?: any): void {
  useFocusEffect(
    useCallback(() => {
      const onBackPress = (): boolean => {
        if (handler) {
          handler();
        }
        return true;
      };
      BackHandler.addEventListener('hardwareBackPress', onBackPress);
      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [handler]),
  );
}

export default useBackHandler;
