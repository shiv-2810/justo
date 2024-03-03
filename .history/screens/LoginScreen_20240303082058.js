// screens/LoginScreen.js
import React, { useState, useRef } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, ImageBackground, Text, Pressable } from 'react-native';

const LoginScreen = ({ navigation }) => {
    const [pins, setPins] = useState(['', '', '', '']);
    const inputRefs = [useRef(), useRef(), useRef(), useRef()];
  
    const handlePinChange = (index, value) => {
      const newPins = [...pins];
      newPins[index] = value;
      setPins(newPins);
  
      if (value && index < 3 && inputRefs[index + 1]?.current) {
        inputRefs[index + 1].current.focus();
      }
    };
  
    const handleLogin = () => {
      const enteredPin = pins.join('');
      if (enteredPin === '1234') {
        navigation.replace('Home');
      } else {
        Alert.alert('Login Failed', 'Invalid PIN');
        setPins(['', '', '', '']);
        inputRefs[0].current.focus();
      }
    };

  return (
    <ImageBackground source={{uri:'https://t3.ftcdn.net/jpg/03/55/60/70/360_F_355607062_zYMS8jaz4SfoykpWz5oViRVKL32IabTP.jpg'}} style={styles.background}>
      <View style={styles.container}>
         <Text style={styles.otpTxt}>Enter OTP</Text>
        <View style={styles.inputContainer}>
          {pins.map((pin, index) => (
            <TextInput
              key={index}
              ref={inputRefs[index]}
              style={styles.input}
              value={pin}
              maxLength={1}
              keyboardType="numeric"
              onChangeText={(value) => handlePinChange(index, value)}
              onSubmitEditing={() => index === 3 && handleLogin()}
            />
          ))}
        </View>
        <Pressable onPress={handleLogin} style={styles.loginBtn}>
            <Text>Login</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
  container: {
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: 20,
    borderRadius: 10,
    minWidth: '70%',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: 50,
    borderColor: '#333',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    textAlign: 'center',
    marginHorizontal:5
  },
  otpTxt:{
    fontSize:22,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 30,
  },
  loginBtn:{
    paddingHorizontal:30,
    paddingVertical:10,
    backgroundColor:'green'
  }
});

export default LoginScreen;
