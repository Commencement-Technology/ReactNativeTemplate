// src/components/MessageListScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Dimensions,
} from 'react-native';
import Sidebar from '../../components/Sidebar';
import TopBar from '../../components/TopBar'; 

const { width } = Dimensions.get('window');

const users = [
  {
    id: 1,
    name: 'Edein Vindain',
    time: '7:00',
    message: 'huhu.. I meet u, do u wann...',
    avatar: require('../../assets/user1.jpg'),
  },
  {
    id: 2,
    name: 'David Cow',
    time: '6:30',
    message: 'Damn... shut up',
    avatar: require('../../assets/user1.jpg'),
  },
  {
    id: 3,
    name: 'Rabbit Mea',
    time: '5:00',
    message: 'The weather is good',
    avatar: require('../../assets/user1.jpg'),
  },
  {
    id: 4,
    name: 'Eat meat',
    time: 'Sun',
    message: 'What ur name?',
    avatar: require('../../assets/user1.jpg'),
  },
  {
    id: 5,
    name: 'Even Dain',
    time: 'Sun',
    message: 'Don’t play with me anymo...',
    avatar: require('../../assets/user1.jpg'),
  },
];

const MessageListScreen = () => {
  const [selectedId, setSelectedId] = useState(null);

  return (
  <>
    <View style={styles.topbar}>
      <TopBar />
      {/* Your chat list and other content here */}
    </View>
    <View style={styles.container}>
      <Sidebar users={users} selectedId={selectedId} onSelect={setSelectedId} />
      <View style={styles.mainPanel}>
        <View style={styles.searchBarContainer}>
          <TextInput
            placeholder="Search"
            placeholderTextColor="#ccc"
            style={styles.searchBar}
          />
        </View>

        <FlatList
          data={users}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.chatItem}>
              <Image source={item.avatar} style={styles.avatar} />
              <View style={styles.textContainer}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.message}>{item.message}</Text>
              </View>
              <Text style={styles.time}>{item.time}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View></>
  );
};

export default MessageListScreen;

const styles = StyleSheet.create({

  container: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: '#6A1B9A',
  },
  mainPanel: {
    flex: 1,
    backgroundColor: '#d5b5f3',
    padding: 10,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
  },
  searchBarContainer: {
    backgroundColor: '#cba7e8',
   
    paddingHorizontal: 10,
    borderRadius: 20,
    marginBottom: 10,
  },
  searchBar: {
    height: 40,
    color: '#fff',
    fontSize: 16,
  },
  chatItem: {
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 10,
    alignItems: 'center',
    backgroundColor: '#ffffff20',
    borderRadius: 15,
    marginBottom: 10,
  },
  avatar: {
    width: 55,
    height: 55,
    borderRadius: 30,
  },
  textContainer: {
    flex: 1,
    marginLeft: 15,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#2c003e',
  },
  message: {
    fontSize: 13,
    color: '#5e3e7b',
    marginTop: 2,
  },
  time: {
    fontSize: 12,
    color: '#6b4b8e',
  },
});
