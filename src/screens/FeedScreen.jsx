import React from 'react';
import { View, Text, ScrollView, TextInput, StyleSheet, StatusBar } from 'react-native';
import Story from '../../components/Story';
// import PostCard from '../../components/PostCard';
import Icon from 'react-native-vector-icons/Ionicons';

export default function FeedScreen() {
  return (
    <ScrollView style={styles.container}>
      <StatusBar backgroundColor="#A45EE3" barStyle="light-content" />
      <View style={styles.header}>
        <TextInput style={styles.searchInput} placeholder="Explore" placeholderTextColor="#ccc" />
        <Icon name="notifications" size={24} color="#fff" style={styles.bell} />
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.storyBar}>
        <Story name="You" isAdd />
        <Story name="Bibek" image={require('../../assets/user1.jpg')} />
        <Story name="Bikey" image={require('../../assets/user2.jpeg')} />
        <Story name="Puskar" image={require('../../assets/user3.jpeg')} />
        <Story name="Sandip" image={require('../../assets/user4.jpeg')} />
      </ScrollView>
      <PostCard
        name="Edein Vindain"
        time="5 minute"
        content="This is a beautiful sky that I took last week. It’s great, right? :)"
        hashtags={["#Beauty_nature", "#Clound"]}
        image={require('../../assets/post.jpeg')}
        likes={999}
        comments={320}
      />
      <PostCard
        name="Edein Vindain"
        time="5 minute"
        content="This is a beautiful sky that I took last week. It’s great, right? :)"
        hashtags={["#Beauty_nature", "#Clound"]}
        image={require('../../assets/post.jpeg')}
        likes={999}
        comments={320}
      />
      {/* <PostCard
        name="Edein Vindain"
        time="5 minute"
        content="This is a beautiful sky that I took last week. It’s great, right? :)"
        hashtags={["#Beauty_nature", "#Clound"]}
        image={require('../../assets/post.jpeg')}
        likes={999}
        comments={320}
      /><PostCard */}
        name="Edein Vindain"
        time="5 minute"
        content="This is a beautiful sky that I took last week. It’s great, right? :)"
        hashtags={["#Beauty_nature", "#Clound"]}
        image={require('../../assets/post.jpeg')}
        likes={999}
        comments={320}
      /><PostCard
        name="Edein Vindain"
        time="5 minute"
        content="This is a beautiful sky that I took last week. It’s great, right? :)"
        hashtags={["#Beauty_nature", "#Clound"]}
        image={require('../../assets/post.jpeg')}
        likes={999}
        comments={320}
      /><PostCard
        name="Edein Vindain"
        time="5 minute"
        content="This is a beautiful sky that I took last week. It’s great, right? :)"
        hashtags={["#Beauty_nature", "#Clound"]}
        image={require('../../assets/post.jpeg')}
        likes={999}
        comments={320}
      /><PostCard
        name="Edein Vindain"
        time="5 minute"
        content="This is a beautiful sky that I took last week. It’s great, right? :)"
        hashtags={["#Beauty_nature", "#Clound"]}
        image={require('../../assets/post.jpeg')}
        likes={999}
        comments={320}
      /><PostCard
        name="Edein Vindain"
        time="5 minute"
        content="This is a beautiful sky that I took last week. It’s great, right? :)"
        hashtags={["#Beauty_nature", "#Clound"]}
        image={require('../../assets/post.jpeg')}
        likes={999}
        comments={320}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#A45EE3',
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#8055C0',
    color: '#fff',
    paddingHorizontal: 20,
  },
  bell: {
    marginLeft: 10,
  },
  storyBar: {
    flexDirection: 'row',
    marginVertical: 10,
  },
});
