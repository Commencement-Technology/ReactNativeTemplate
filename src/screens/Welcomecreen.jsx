import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native';

export default function WelcomeScreen({ navigation }) {
    useEffect(() => {
    const timer = setTimeout(() => {
    navigation.replace('Home');
    }, 3000);

    return () => clearTimeout(timer);
}, [navigation]);

    return (
    <SafeAreaView style={styles.container}>
    <Image
        source={require('../../assets/Logo.webp')}
        style={styles.logo}
    />
    <Text style={styles.title}>Welcome to Knowtica</Text>
    <Text style={styles.welcomeText}> Connecting students and teachers for smarter learning. </Text>
    <Text style={styles.subtitle}>Loading...</Text>
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
   welcomeText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#aaa',
  },
});
