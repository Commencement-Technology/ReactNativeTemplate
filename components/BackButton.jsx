import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

export default function HeaderWithBackButton({ title }) {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <Pressable
        onPress={() => navigation.goBack()}
        android_ripple={{ color: '#ccc', borderless: true }}
        style={({ pressed }) => [styles.backButton, pressed && styles.pressed]}
      >
        <Icon name="arrow-left" size={28} color="#2575fc" />
      </Pressable>

      <Text style={styles.title}>{title}</Text>

      {/* Placeholder to keep title centered */}
      <View style={styles.rightPlaceholder} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 56,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 4, // shadow for android
    shadowColor: '#000', // shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  backButton: {
    padding: 8,
    borderRadius: 24,
  },
  pressed: {
    opacity: 0.6,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2575fc',
    flex: 1,
    textAlign: 'center',
  },
  rightPlaceholder: {
    width: 40, // same width as back button to keep title centered
  },
});
