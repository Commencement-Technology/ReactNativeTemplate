import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Story({ name, image, isAdd }) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {isAdd ? (
          <>
            <Image source={require('../assets/you.jpeg')} style={styles.image} />
            <View style={styles.plus}><Icon name="add" size={16} color="#fff" /></View>
          </>
        ) : (
          <Image source={image} style={styles.image} />
        )}
      </View>
      <Text style={styles.name}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center', marginHorizontal: 5 },
  imageContainer: { position: 'relative' },
  image: {
    width: 60, height: 60, borderRadius: 30, borderWidth: 2, borderColor: '#fff',
  },
  plus: {
    position: 'absolute', right: 0, bottom: 0, backgroundColor: '#A45EE3',
    borderRadius: 10, padding: 2,
  },
  name: { color: '#fff', fontSize: 12, marginTop: 4 },
});
