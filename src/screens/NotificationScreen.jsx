import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const notifications = [
  {
    id: '1',
    title: 'New Like!',
    message: 'John liked your post.',
    type: 'heart',
    time: '2 min ago',
  },
  {
    id: '2',
    title: 'New Comment',
    message: 'Riya commented on your note.',
    type: 'chatbubble',
    time: '10 min ago',
  },
  {
    id: '3',
    title: 'Update Available',
    message: 'New notes for 3rd semester are uploaded.',
    type: 'download',
    time: '30 min ago',
  },
  {
    id: '4',
    title: 'Friend Request',
    message: 'Karan sent you a friend request.',
    type: 'person-add',
    time: '1 hour ago',
  },
];

export default function NotificationScreen() {
  const renderItem = ({ item }) => (
    <Pressable style={({ pressed }) => [styles.card, pressed && { opacity: 0.8 }]}>
      <View style={styles.iconContainer}>
        <Icon name={item.type} size={26} color="#A45EE3" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.message}>{item.message}</Text>
        <Text style={styles.time}>{item.time}</Text>
      </View>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>🔔 Notifications</Text>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F7FD',
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4C278A',
    marginBottom: 16,
    textAlign: 'center',
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  iconContainer: {
    marginRight: 12,
    marginTop: 4,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    color: '#333',
    fontSize: 16,
  },
  message: {
    color: '#555',
    marginTop: 4,
    fontSize: 14,
  },
  time: {
    fontSize: 12,
    color: 'gray',
    marginTop: 6,
  },
});
