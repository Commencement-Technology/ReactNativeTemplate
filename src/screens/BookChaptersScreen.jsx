import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function BookChaptersScreen({ route }) {
  const { bookTitle, chapters } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{bookTitle} Chapters</Text>
      <FlatList
        data={chapters}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.chapterItem}>
            <Text style={styles.chapterText}>{index + 1}. {item}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F4FA',
    padding: 16,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4C278A',
    marginBottom: 20,
    textAlign: 'center',
  },
  chapterItem: {
    paddingVertical: 10,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  chapterText: {
    fontSize: 16,
    color: '#333',
  },
});
