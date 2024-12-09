
import { Button, FlatList, Text, TextInput, View } from 'react-native';
import Styles from './styles/Styles';
import { useState } from 'react';

export default function App() {

  return (
    <View style={Styles.container}>
      <TextInput style={Styles.textField} placeholder='message'/>
      <Button title='ADD'/>
    </View>
  );
}

