import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');

const ReelsComponent = ({ data, onReelPress }) => {
  const renderReel = ({ item }) => (
    <TouchableOpacity onPress={() => onReelPress(item)} style={styles.reelContainer}>
      <Image source={item.image} style={styles.reelImage} />
      <View style={styles.reelInfo}>
        <Icon name="play" size={20} color="#fff" />
        <Text style={styles.reelStat}>{item.views}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderReel}
      keyExtractor={item => item.id.toString()}
      numColumns={2}
      scrollEnabled={false}
      contentContainerStyle={styles.grid}
    />
  );
};

const styles = {
  grid: {
    paddingBottom: 20,
  },
  reelContainer: {
    margin: 5,
    position: 'relative',
  },
  reelImage: {
    width: width / 2 - 10,
    height: 300,
    borderRadius: 5,
  },
  reelInfo: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  reelStat: {
    color: '#fff',
    fontSize: 12,
    marginLeft: 5,
  },
};

export default ReelsComponent;