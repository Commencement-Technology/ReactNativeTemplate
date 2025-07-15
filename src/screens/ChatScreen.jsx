import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function ChatScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../assets/user1.jpg')} style={styles.avatar} />
        <Text style={styles.name}>Edein Vindain</Text>
        <Icon name="call" size={22} color="#fff" style={styles.icon} />
        <Icon name="videocam" size={22} color="#fff" style={styles.icon} />
        <Icon name="ellipsis-vertical" size={22} color="#fff" />
      </View>
      <ScrollView style={styles.chatArea}>
        <Text style={styles.messageLeft}>Hello, have a great day!</Text>
        <Text style={styles.messageRight}>Thank you broo! ❤️</Text>
        <Text style={styles.messageLeft}>Hope that u can remember who i am in tomorrow</Text>
        <Text style={styles.messageRight}>What's wrong to you?!</Text>
        <Text style={styles.messageRight}>Are you ok?</Text>
        <Text style={styles.messageLeft}>I had a dream. At one day, no one know who i am...</Text>
        <Text style={styles.messageLeft}>I feel extremely scare</Text>
        <Text style={styles.messageRight}>I understand</Text>
      </ScrollView>
      <View style={styles.inputBar}>
        <Icon name="happy" size={24} color="#fff" />
        <TextInput style={styles.input} placeholder="But who are u?" placeholderTextColor="#aaa" />
        <Icon name="mic" size={24} color="#fff" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#381f56' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#8047C6',
  },
  avatar: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },
  name: { flex: 1, color: '#fff', fontWeight: 'bold', fontSize: 16 },
  icon: { marginHorizontal: 5 },
  chatArea: { padding: 20 },
  messageLeft: {
    alignSelf: 'flex-start',
    backgroundColor: '#6b4c8e',
    padding: 10,
    borderRadius: 15,
    marginBottom: 10,
    maxWidth: '75%',
    color: '#fff',
  },
  messageRight: {
    alignSelf: 'flex-end',
    backgroundColor: '#a86fe2',
    padding: 10,
    borderRadius: 15,
    marginBottom: 10,
    maxWidth: '75%',
    color: '#fff',
  },
  inputBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#8047C6',
    padding: 10,
  },
  input: {
    flex: 1,
    marginHorizontal: 10,
    backgroundColor: '#5f3c89',
    borderRadius: 20,
    paddingHorizontal: 15,
    color: '#fff',
  },
});
