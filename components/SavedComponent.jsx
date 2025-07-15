import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');

const SavedComponent = ({ data, onCollectionPress }) => {
  const renderCollection = ({ item }) => (
    <TouchableOpacity onPress={() => onCollectionPress(item)} style={styles.collectionContainer}>
      <Image source={item.coverImage} style={styles.collectionImage} />
      <View style={styles.collectionInfo}>
        <Text style={styles.collectionName}>{item.name}</Text>
        <Text style={styles.collectionCount}>{item.count} saved</Text>
      </View>
      <Icon name="chevron-forward" size={20} color="#999" />
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderCollection}
      keyExtractor={item => item.id.toString()}
      scrollEnabled={false}
      contentContainerStyle={styles.list}
    />
  );
};

const styles = {
  list: {
    paddingBottom: 20,
    width: '100%',
  },
  collectionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  collectionImage: {
    width: 60,
    height: 60,
    borderRadius: 5,
    marginRight: 15,
  },
  collectionInfo: {
    flex: 1,
  },
  collectionName: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 5,
  },
  collectionCount: {
    fontSize: 14,
    color: '#999',
  },
};

export default SavedComponent;