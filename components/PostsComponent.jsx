import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');

const PostsComponent = ({ data, onImagePress }) => {
  const renderPost = ({ item }) => (
    <TouchableOpacity onPress={() => onImagePress(item)}>
      <Image source={item.image} style={styles.gridImage} />
      <View style={styles.postOverlay}>
        <View style={styles.postStat}>
          <Icon name="heart" size={16} color="#fff" />
          <Text style={styles.postStatText}>{item.likes}</Text>
        </View>
        <View style={styles.postStat}>
          <Icon name="chatbubble" size={16} color="#fff" />
          <Text style={styles.postStatText}>{item.comments}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderPost}
      keyExtractor={item => item.id.toString()}
      numColumns={3}
      scrollEnabled={false}
      contentContainerStyle={styles.grid}
    />
  );
};

const styles = {
  grid: {
    paddingBottom: 20,
  },
  gridImage: { 
    width: width / 3 - 2, 
    height: width / 3 - 2,
    margin: 1,
  },
  postOverlay: {
    position: 'absolute',
    bottom: 5,
    left: 5,
    right: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
  postStat: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  postStatText: {
    color: '#fff',
    fontSize: 12,
    marginLeft: 3,
  },
};

export default PostsComponent;