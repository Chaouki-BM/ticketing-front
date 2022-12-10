import {StyleSheet, Image, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Input, Button} from '@ui-kitten/components';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {loginUserApi} from '../redux/actions/auth.action';
const LoginScreen = ({navigation}) => {
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();
  const handleLogin = () => {
    dispatch(loginUserApi(loginInfo, navigation));
    //navigation.navigate('admin');
  };
  return (
    <View style={styles.container}>
      <View style={{marginTop: 50}}>
        <Image
          source={require('../assets/images/ping.png')}
          style={styles.logoStyle}
        />
      </View>
      <Input
        style={styles.inputStyle}
        placeholder="Email"
        size="large"
        value={loginInfo.email}
        onChangeText={val => {
          setLoginInfo({...loginInfo, email: val});
        }}
      />
      <Input
        secureTextEntry={true}
        style={styles.inputStyle}
        placeholder="Password"
        size="large"
        value={loginInfo.password}
        onChangeText={val => {
          setLoginInfo({...loginInfo, password: val});
        }}
      />
      <Button size="large" style={styles.loginBtn} onPress={handleLogin}>
        Sign in
      </Button>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 10,
  },
  loginBtn: {
    width: 200,
    borderRadius: 10,
  },
  inputStyle: {
    marginVertical: 15,
  },
  logoStyle: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
});
