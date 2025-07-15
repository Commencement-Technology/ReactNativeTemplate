import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

const semesters = [
  { id: '1', title: '1st Semester', icon: 'school', progress: 70, notes: 5 },
  { id: '2', title: '2nd Semester', icon: 'book', progress: 50, notes: 4 },
  { id: '3', title: '3rd Semester', icon: 'library', progress: 80, notes: 7 },
  { id: '4', title: '4th Semester', icon: 'laptop', progress: 60, notes: 3 },
  { id: '5', title: '5th Semester', icon: 'desktop', progress: 45, notes: 6 },
  { id: '6', title: '6th Semester', icon: 'code-working', progress: 30, notes: 2 },
  { id: '7', title: '7th Semester', icon: 'construct', progress: 10, notes: 1 },
  { id: '8', title: '8th Semester', icon: 'trophy', progress: 0, notes: 0 },
];

export default function CoursesScreen({ navigation }) {
  const handleSemesterPress = (semester) => {
    navigation.navigate('SemesterNotes', {
      semesterId: semester.id,
      semesterTitle: semester.title,
    });
  };

  const renderItem = ({ item }) => (
    <Pressable
      onPress={() => handleSemesterPress(item)}
      style={({ pressed }) => [styles.cardWrapper, pressed && { transform: [{ scale: 0.98 }] }]}
    >
      <LinearGradient
        colors={['#A45EE3', '#5C2E91']}
        style={styles.card}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={styles.iconWrapper}>
          <Icon name={item.icon} size={32} color="#fff" />
        </View>
        <Text style={styles.cardText}>{item.title}</Text>
        <Text style={styles.noteCount}>{item.notes} Notes</Text>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: `${item.progress}%` }]} />
        </View>
        <Text style={styles.progressText}>{item.progress}% Complete</Text>
      </LinearGradient>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>📘 BSc CSIT Courses</Text>
      <FlatList
        data={semesters}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const CARD_WIDTH = Dimensions.get('window').width / 2 - 24;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F4FA',
    paddingTop: 40,
    paddingHorizontal: 16,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#4C278A',
  },
  row: {
    justifyContent: 'space-between',
  },
  cardWrapper: {
    flex: 1,
    margin: 8,
  },
  card: {
    width: CARD_WIDTH,
    paddingVertical: 20,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: { width: 2, height: 2 },
  },
  iconWrapper: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 32,
    padding: 10,
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 6,
  },
  noteCount: {
    fontSize: 12,
    color: '#fff',
    marginBottom: 10,
  },
  progressBar: {
    width: '80%',
    height: 6,
    backgroundColor: '#ffffff50',
    borderRadius: 4,
    overflow: 'hidden',
    marginTop: 5,
  },
  progressFill: {
    height: 6,
    backgroundColor: '#fff',
  },
  progressText: {
    fontSize: 10,
    color: '#fff',
    marginTop: 4,
  },
  list: {
    paddingBottom: 40,
  },
});
