// screens/EditScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';

function EditScreen({ navigation, route }) {
  const [text, setText] = useState(route.params.item.title);

  const handleSave = () => {
    navigation.navigate('Home', { updatedText: text });
  };

  const handleCancel = () => {
    navigation.goBack();
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1, marginBottom: 20 }}
        onChangeText={setText}
        value={text}
      />
      <Button title="Save" onPress={handleSave} />
      <Button title="Cancel" onPress={handleCancel} />
    </View>
  );
}

export default EditScreen;
