import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function SignInScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Knowtica</Text>
      <Text style={styles.heading}>Sign In</Text>

      <TextInput placeholder="Email/phone number" style={styles.input} placeholderTextColor="#fff" />
      <TextInput placeholder="Password" style={styles.input} placeholderTextColor="#fff" secureTextEntry />

      <View style={styles.row}>
        <Text style={styles.link}>Forgot password?</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign in</Text>
      </TouchableOpacity>

      <Text style={styles.or}>Or sign in with</Text>
      <View style={styles.socials}>
        <Text>📘</Text>
        <Text>🐦</Text>
        <Text>🟢</Text>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.linkText}>Don't have an account? <Text style={styles.link}>Sign up</Text></Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#7f5af0', padding: 20, justifyContent: 'center' },
  logo: { fontSize: 36, fontStyle: 'italic', textAlign: 'center', color: '#fff', marginBottom: 20 },
  heading: { fontSize: 24, color: '#fff', marginBottom: 10 },
  input: { backgroundColor: '#a78bfa', borderRadius: 25, padding: 10, marginVertical: 8, color: '#fff' },
  row: { flexDirection: 'row', justifyContent: 'flex-end' },
  button: { backgroundColor: '#5f3dc4', borderRadius: 25, padding: 15, marginTop: 10, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: 'bold' },
  or: { textAlign: 'center', marginVertical: 10, color: '#eee' },
  socials: { flexDirection: 'row', justifyContent: 'center', gap: 20 },
  linkText: { textAlign: 'center', marginTop: 10, color: '#eee' },
  link: { color: '#fff', fontWeight: 'bold' },
});
