import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function FindTutorScreen() {
  const [form, setForm] = useState({ name: '', subject: '', location: '' });

  const handleChange = (field, value) => setForm({ ...form, [field]: value });

  const handleSubmit = () => {
    console.log('Form Submitted', form);
    alert('Tutor request submitted!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Request a Tutor</Text>
      <TextInput style={styles.input} placeholder="Name" onChangeText={(val) => handleChange('name', val)} />
      <TextInput style={styles.input} placeholder="Subject" onChangeText={(val) => handleChange('subject', val)} />
      <TextInput style={styles.input} placeholder="Location" onChangeText={(val) => handleChange('location', val)} />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10 },
});