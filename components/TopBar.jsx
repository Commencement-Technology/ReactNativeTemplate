import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const TopBar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.appName}>Knowtica</Text>

      <View style={styles.rightIcons}>
        <TouchableOpacity style={styles.iconBtn}>
          <Icon name="menu" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconBtn}>
          <Icon name="camera" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  container: {
    height: 60,
    paddingHorizontal: 15,
    backgroundColor: '#9057E5', // Match your theme
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 5,
  },
  appName: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  rightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconBtn: {
    marginLeft: 15,
  },
});
