// src/components/ChatBubble.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ChatBubble = ({ message, isUser }) => {
  return (
    <View
      style={[
        styles.bubble,
        isUser ? styles.userBubble : styles.botBubble,
      ]}>
      <Text style={styles.messageText}>{message}</Text>
    </View>
  );
};

export default ChatBubble;

const styles = StyleSheet.create({
  bubble: {
    padding: 10,
    marginVertical: 6,
    marginHorizontal: 10,
    borderRadius: 16,
    maxWidth: '75%',
  },
  userBubble: {
    backgroundColor: '#DCF8C6',
    alignSelf: 'flex-end',
  },
  botBubble: {
    backgroundColor: '#EAEAEA',
    alignSelf: 'flex-start',
  },
  messageText: {
    fontSize: 16,
  },
});
