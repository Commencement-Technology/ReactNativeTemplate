import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Switch,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

const images = [
  require('../../assets/user1.jpg'),
  require('../../assets/user2.jpeg'),
  require('../../assets/user3.jpeg'),
  require('../../assets/user4.jpeg'),
  require('../../assets/user4.jpeg'),
];

const highlights = [
  { id: 1, image: require('../../assets/user1.jpg'), title: 'Travel' },
  { id: 2, image: require('../../assets/user2.jpeg'), title: 'Work' },
  { id: 3, image: require('../../assets/user3.jpeg'), title: 'Life' },
];

const ProfileScreen = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [activeTab, setActiveTab] = useState('Posts');

  const toggleTheme = () => setDarkMode(!darkMode);

  const themeColors = {
    background: darkMode ? ['#5f2c82', '#49a09d'] : ['#ffffff', '#f0f0f0'],
    textColor: darkMode ? '#fff' : '#333',
    subText: darkMode ? '#ddd' : '#777',
    buttonBg: darkMode ? '#333' : '#eee',
    buttonText: darkMode ? '#fff' : '#000',
  };

  return (
    <ScrollView style={styles.container}>
      <LinearGradient colors={themeColors.background} style={styles.background}>
        <Image source={require('../../assets/user1.jpg')} style={styles.headerImage} />

        <View style={styles.profileContainer}>
          <LinearGradient colors={['#FF416C', '#FF4B2B']} style={styles.avatarBorder}>
            <Image source={require('../../assets/you.jpeg')} style={styles.avatar} />
          </LinearGradient>

          <Text style={[styles.name, { color: themeColors.textColor }]}>Ramanand Mandal</Text>
          <Text style={[styles.username, { color: themeColors.subText }]}>@ramanand</Text>

          <View style={styles.statsContainer}>
            {['Posts', 'Followers', 'Following'].map((label, i) => (
              <View style={styles.stat} key={i}>
                <Text style={[styles.statCount, { color: themeColors.textColor }]}>
                  {label === 'Posts' ? 146 : label === 'Followers' ? '12k' : 200}
                </Text>
                <Text style={[styles.statLabel, { color: themeColors.subText }]}>{label}</Text>
              </View>
            ))}
          </View>

          <View style={styles.buttonRow}>
            <TouchableOpacity style={[styles.followButton, { backgroundColor: themeColors.buttonBg }]}>
              <Text style={[styles.buttonText, { color: themeColors.buttonText }]}>Follow</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.messageButton, { backgroundColor: '#fff' }]}>
              <Text style={styles.buttonText}>Message</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.editButton}>
              <Icon name="create-outline" size={20} color="#fff" />
            </TouchableOpacity>
          </View>

          <Text style={[styles.bio, { color: themeColors.textColor }]}>
            “ Hello Guy's its me Ramanand Mandal. I'm a software engineer with having the experience of 6 months in the field of software Development. I works in Php, HTML5, CSS, Java, React.js, Vite , React Native, Django Development for Frontend, Mongodb, MySQL, phpmyadmin,etc for the database and Node.js + Express, php for backend. I can develop the website as well as Mobile app in Reactt Native the cross platform. ”
          </Text>

          {/* Highlights */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.highlights}>
            {highlights.map(h => (
              <View key={h.id} style={styles.highlightCircle}>
                <Image source={h.image} style={styles.highlightImage} />
                <Text style={{ color: themeColors.textColor, fontSize: 12 }}>{h.title}</Text>
              </View>
            ))}
          </ScrollView>

          {/* Tabs */}
          <View style={styles.tabContainer}>
            {['Posts', 'Tagged', 'Saved'].map(tab => (
              <TouchableOpacity key={tab} onPress={() => setActiveTab(tab)}>
                <Text style={[styles.tabText, activeTab === tab && styles.activeTab]}>{tab}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Posts Grid */}
          <ScrollView contentContainerStyle={styles.grid} scrollEnabled={false}>
            {images.map((img, index) => (
              <Image source={img} style={styles.gridImage} key={index} />
            ))}
          </ScrollView>
        </View>
      </LinearGradient>

      

      {/* Theme Toggle */}
      <View style={styles.themeToggle}>
        <Text style={{ color: themeColors.textColor, marginRight: 6 }}>Settings</Text>
        <Switch value={darkMode} onValueChange={toggleTheme} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  background: { flex: 1 },
  headerImage: { width: '100%', height: 180, resizeMode: 'cover' },
  profileContainer: {
    alignItems: 'center',
    marginTop: -110,
    paddingTop: 60,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#00000020',
  },
  avatarBorder: {
    padding: 3,
    borderRadius: 50,
    marginBottom: 10,
  },
  avatar: { width: 90, height: 90, borderRadius: 45 },
  name: { fontSize: 20, fontWeight: 'bold' },
  username: { fontSize: 14 },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 16,
  },
  stat: { alignItems: 'center' },
  statCount: { fontSize: 16, fontWeight: 'bold' },
  statLabel: { fontSize: 12 },
  buttonRow: { flexDirection: 'row', marginBottom: 10 },
  followButton: { padding: 10, borderRadius: 10, marginRight: 10 },
  messageButton: { backgroundColor: '#fff', padding: 10, borderRadius: 10 },
  editButton: { backgroundColor: '#666', padding: 10, borderRadius: 10 },
  buttonText: { fontWeight: '600' },
  bio: { fontStyle: 'italic', marginVertical: 10 },
  highlights: { flexDirection: 'row', marginVertical: 10 },
  highlightCircle: { alignItems: 'center', marginHorizontal: 10 },
  highlightImage: { width: 60, height: 60, borderRadius: 30, marginBottom: 5 },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    width: '100%',
    paddingVertical: 6,
  },
  tabText: { fontSize: 14, color: '#ccc' },
  activeTab: { fontWeight: 'bold', color: '#fff', borderBottomWidth: 2, borderBottomColor: '#fff' },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 4,
    paddingBottom: 20,
  },
  gridImage: { width: 100, height: 100, margin: 4, borderRadius: 8 },
  bottomNav: {
    height: 60,
    backgroundColor: '#222',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  themeToggle: {
    position: 'absolute',
    top: 40,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default ProfileScreen;
