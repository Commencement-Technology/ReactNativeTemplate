import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const TaggedComponent = ({ data, onImagePress }) => {
  const renderTagged = ({ item }) => (
    <TouchableOpacity onPress={() => onImagePress(item)}>
      <Image source={item.image} style={styles.gridImage} />
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderTagged}
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
};

export default TaggedComponent;