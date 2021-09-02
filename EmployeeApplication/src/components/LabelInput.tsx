import React, {useState} from 'react';
import {
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import {hidePassword, showPassword} from '../assets';
import {DIMENSION} from '../constants/StyleConstants';
import colors from '../theme/color';

type LabelInputProps = {
  label: string;
  value: string;
  passwordField?: boolean;
  errMsg: any;
  keyBoardType?: any;
  onChangeVal?: (val: string) => void;
};

function LabelInput(props: LabelInputProps) {
  const [pswField, onChangePswField] = useState(props.passwordField);

  const borderStyle = () => {
    if (props.errMsg === undefined) {
      return colors.inputBorder;
    } else if (props.errMsg === '') {
      return colors.inputBorder;
    } else {
      return colors.inputWarning;
    }
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.labelStyle}>{props.label.toLowerCase()}</Text>
        <View
          style={[
            styles.wrapper,
            {
              borderColor: borderStyle(),
            },
          ]}>
          <View style={{flexDirection: 'row'}}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={props.onChangeVal}
              value={props.value}
              secureTextEntry={pswField}
              keyboardType={props.keyBoardType}
              selectionColor={colors.grey}
            />
            {props.passwordField && props.value ? (
              <TouchableOpacity
                style={styles.securePassword}
                onPress={() => onChangePswField(!pswField)}>
                <Image
                  source={pswField ? showPassword : hidePassword}
                  style={styles.imageStyle}
                />
              </TouchableOpacity>
            ) : null}
          </View>
        </View>
        {props.errMsg ? (
          <Text style={styles.errorText}>{props.errMsg}</Text>
        ) : null}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  labelStyle: {
    color: colors.inputLabel,
    paddingBottom: 4,
  },
  wrapper: {
    borderWidth: 1,
    borderRadius: 4,
    width: DIMENSION.screenWidth - 48,
  },
  inputStyle: {
    height: 38,
    flex: 1,
    paddingVertical: 2,
    color: colors.primaryText,
    paddingHorizontal: 8,
    fontSize: 16,
  },
  securePassword: {
    height: 38,
    width: 38,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    width: 24,
    height: 24,
  },
  errorText: {
    color: colors.inputWarning,
    paddingTop: 4,
    lineHeight: 18,
    textAlign: 'left',
  },
});

export default LabelInput;
