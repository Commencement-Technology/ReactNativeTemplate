import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function CallScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Edein Vindain</Text>
      <Image source={require('../../assets/user1.jpg')} style={styles.avatar} />
      <Text style={styles.time}>00:08</Text>
      <View style={styles.actions}>
        <Icon name="mic-off" size={30} color="#fff" />
        <Icon name="volume-high" size={30} color="#fff" />
        <Icon name="videocam" size={30} color="#fff" />
        <TouchableOpacity style={styles.endBtn}>
          <Icon name="call" size={30} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#A45EE3', alignItems: 'center', justifyContent: 'center' },
  name: { color: '#fff', fontSize: 22, fontWeight: 'bold' },
  avatar: { width: 100, height: 100, borderRadius: 50, marginVertical: 20 },
  time: { color: '#eee', fontSize: 18 },
  actions: { flexDirection: 'row', gap: 30, marginTop: 30 },
  endBtn: {
    backgroundColor: '#E2445C',
    padding: 10,
    borderRadius: 50,
  },
});
