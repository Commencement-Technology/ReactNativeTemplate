
// src/screens/RegisterScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function RegisterScreen() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChange = (field, value) => setForm({ ...form, [field]: value });

  const handleRegister = () => {
    console.log('Registering:', form);
    alert('Registered (mock)!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <TextInput style={styles.input} placeholder="Full Name" onChangeText={(val) => handleChange('name', val)} />
      <TextInput style={styles.input} placeholder="Email" onChangeText={(val) => handleChange('email', val)} />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry onChangeText={(val) => handleChange('password', val)} />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10 },
});
