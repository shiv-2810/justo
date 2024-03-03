// screens/LoginScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';

function LoginScreen({ navigation }) {
  const [pin, setPin] = useState('');

  const handleLogin = () => {
    if (pin === '1234') {
      navigation.replace('Home');
    } else {
      Alert.alert('Login Failed', 'Invalid PIN');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1, marginBottom: 20 }}
        placeholder="Enter PIN"
        onChangeText={setPin}
        value={pin}
        keyboardType="numeric"
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

export default LoginScreen;
