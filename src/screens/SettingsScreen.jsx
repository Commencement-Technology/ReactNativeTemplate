import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Switch,
  Pressable,
  ScrollView,
  Image,
  Alert,
  Modal,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
// import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SettingsScreen() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isBiometricEnabled, setIsBiometricEnabled] = useState(false);
  const [fontSize, setFontSize] = useState('Medium');
  const [language, setLanguage] = useState('English');
  const [fontModalVisible, setFontModalVisible] = useState(false);
  const [languageModalVisible, setLanguageModalVisible] = useState(false);

  // Load settings on mount
  useEffect(() => {
    const loadSettings = async () => {
      const dark = await AsyncStorage.getItem('darkMode');
      const bio = await AsyncStorage.getItem('biometric');
      const size = await AsyncStorage.getItem('fontSize');
      const lang = await AsyncStorage.getItem('language');

      if (dark) setIsDarkMode(JSON.parse(dark));
      if (bio) setIsBiometricEnabled(JSON.parse(bio));
      if (size) setFontSize(size);
      if (lang) setLanguage(lang);
    };

    loadSettings();
  }, []);

  const toggleDarkMode = async () => {
    const newValue = !isDarkMode;
    setIsDarkMode(newValue);
    await AsyncStorage.setItem('darkMode', JSON.stringify(newValue));
  };

  const toggleBiometric = async () => {
    const newValue = !isBiometricEnabled;
    setIsBiometricEnabled(newValue);
    await AsyncStorage.setItem('biometric', JSON.stringify(newValue));
  };

  const handleLogout = () => {
    Alert.alert('Logout', 'Are you sure you want to logout?', [
      { text: 'Cancel' },
      { text: 'Logout', onPress: () => console.log('Logged out') },
    ]);
  };

  const handleDeleteAccount = () => {
    Alert.alert('Delete Account', 'This action is irreversible. Continue?', [
      { text: 'Cancel' },
      { text: 'Delete', onPress: () => console.log('Account deleted'), style: 'destructive' },
    ]);
  };

  const fontSizes = ['Small', 'Medium', 'Large'];
  const languages = ['English', 'Hindi', 'Nepali', 'Spanish'];

  return (
    <ScrollView style={[styles.container, isDarkMode && { backgroundColor: '#121212' }]}>
      <View style={styles.profileContainer}>
        <Image source={{ uri: 'https://i.pravatar.cc/100' }} style={styles.avatar} />
        <Text style={styles.name}>Ramanand Mandal</Text>
        <Text style={styles.email}>ramanand@example.com</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Preferences</Text>

        <View style={styles.row}>
          <Icon name="moon-outline" size={22} color="#A45EE3" />
          <Text style={styles.rowText}>Dark Mode</Text>
          <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
        </View>

        <Pressable style={styles.row} onPress={() => setFontModalVisible(true)}>
          <Icon name="text" size={22} color="#A45EE3" />
          <Text style={styles.rowText}>Font Size</Text>
          <Text>{fontSize}</Text>
        </Pressable>

        <Pressable style={styles.row} onPress={() => setLanguageModalVisible(true)}>
          <Icon name="language" size={22} color="#A45EE3" />
          <Text style={styles.rowText}>Language</Text>
          <Text>{language}</Text>
        </Pressable>

        <View style={styles.row}>
          <Icon name="finger-print" size={22} color="#A45EE3" />
          <Text style={styles.rowText}>Enable Biometric</Text>
          <Switch value={isBiometricEnabled} onValueChange={toggleBiometric} />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account</Text>

        <Pressable style={styles.row}>
          <Icon name="person-circle-outline" size={22} color="#A45EE3" />
          <Text style={styles.rowText}>Edit Profile</Text>
        </Pressable>

        <Pressable style={styles.row}>
          <Icon name="lock-closed-outline" size={22} color="#A45EE3" />
          <Text style={styles.rowText}>Change Password</Text>
        </Pressable>

        <Pressable style={styles.row}>
          <Icon name="help-circle-outline" size={22} color="#A45EE3" />
          <Text style={styles.rowText}>Help & Support</Text>
        </Pressable>

        <Pressable style={styles.row}>
          <Icon name="chatbox-outline" size={22} color="#A45EE3" />
          <Text style={styles.rowText}>Send Feedback</Text>
        </Pressable>

        <Pressable style={styles.row}>
          <Icon name="call-outline" size={22} color="#A45EE3" />
          <Text style={styles.rowText}>Contact Us</Text>
        </Pressable>

        <Pressable style={styles.row} onPress={handleLogout}>
          <Icon name="log-out-outline" size={22} color="red" />
          <Text style={[styles.rowText, { color: 'red' }]}>Logout</Text>
        </Pressable>

        <Pressable style={styles.row} onPress={handleDeleteAccount}>
          <Icon name="trash-outline" size={22} color="red" />
          <Text style={[styles.rowText, { color: 'red' }]}>Delete Account</Text>
        </Pressable>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>App Info</Text>

        <Pressable style={styles.row}>
          <Icon name="shield-checkmark-outline" size={22} color="#A45EE3" />
          <Text style={styles.rowText}>Privacy Policy</Text>
        </Pressable>

        <Pressable style={styles.row}>
          <Icon name="document-text-outline" size={22} color="#A45EE3" />
          <Text style={styles.rowText}>Terms of Service</Text>
        </Pressable>

        <View style={[styles.row, { borderBottomWidth: 0 }]}>
          <Icon name="information-circle-outline" size={22} color="#A45EE3" />
          <Text style={styles.rowText}>App Version</Text>
          <Text>1.0.0</Text>
        </View>
      </View>

      {/* Font Size Modal */}
      <Modal visible={fontModalVisible} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>Select Font Size</Text>
            {fontSizes.map(size => (
              <TouchableOpacity key={size} onPress={() => {
                setFontSize(size);
                AsyncStorage.setItem('fontSize', size);
                setFontModalVisible(false);
              }}>
                <Text style={styles.modalOption}>{size}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Modal>

      {/* Language Modal */}
      <Modal visible={languageModalVisible} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>Select Language</Text>
            {languages.map(lang => (
              <TouchableOpacity key={lang} onPress={() => {
                setLanguage(lang);
                AsyncStorage.setItem('language', lang);
                setLanguageModalVisible(false);
              }}>
                <Text style={styles.modalOption}>{lang}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F8F8' },
  profileContainer: {
    alignItems: 'center', padding: 20, backgroundColor: '#fff', marginBottom: 12,
  },
  avatar: { width: 80, height: 80, borderRadius: 40, marginBottom: 10 },
  name: { fontSize: 18, fontWeight: 'bold' },
  email: { color: 'gray', fontSize: 14 },
  section: { backgroundColor: '#fff', margin: 10, borderRadius: 8, padding: 10 },
  sectionTitle: { fontSize: 13, color: '#777', marginBottom: 5 },
  row: {
    flexDirection: 'row', alignItems: 'center', paddingVertical: 12,
    borderBottomWidth: 0.5, borderBottomColor: '#ddd',
  },
  rowText: { flex: 1, marginLeft: 12, fontSize: 15, color: '#333' },
  modalOverlay: {
    flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.4)',
  },
  modalBox: {
    width: '80%', backgroundColor: '#fff', borderRadius: 10, padding: 20,
  },
  modalTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  modalOption: {
    fontSize: 16, paddingVertical: 10, borderBottomWidth: 0.5, borderBottomColor: '#ccc',
  },
});
