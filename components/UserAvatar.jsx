// src/components/UserAvatar.js
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const UserAvatar = ({ imageUrl, size = 40 }) => {
  return (
    <View>
      <Image
        source={{ uri: imageUrl }}
        style={[styles.avatar, { width: size, height: size }]}
      />
    </View>
  );
};

export default UserAvatar;

const styles = StyleSheet.create({
  avatar: {
    borderRadius: 9999,
    borderWidth: 1,
    borderColor: '#ddd',
  },
});
