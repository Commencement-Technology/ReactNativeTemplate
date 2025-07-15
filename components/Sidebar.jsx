import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Sidebar = ({ activeTab = 'chat', onTabChange }) => {
  return (
    <View style={styles.sidebar}>
      {/* Top Avatar */}
      <View style={styles.avatarContainer}>
        <Image
          source={require('../assets/user1.jpg')}
          style={styles.avatar}
        />
      </View>

      {/* Navigation Icons */}
      <View style={styles.iconGroup}>
        <SidebarIcon
          name="chatbubble-ellipses"
          active={activeTab === 'chat'}
          onPress={() => onTabChange('chat')}
        />
        <SidebarIcon
          name="people"
          active={activeTab === 'group'}
          onPress={() => onTabChange('group')}
        />
        <SidebarIcon
          name="archive"
          active={activeTab === 'archive'}
          onPress={() => onTabChange('archive')}
        />
      </View>

      {/* Bottom Icon */}
      <View style={styles.bottomIcon}>
        <SidebarIcon
          name="settings"
          active={activeTab === 'settings'}
          onPress={() => onTabChange('settings')}
        />
      </View>
    </View>
  );
};

const SidebarIcon = ({ name, active, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.iconWrapper}>
    <Icon
      name={name}
      size={24}
      color={active ? '#fff' : '#BFA6E1'}
      style={styles.icon}
    />
    {active && <View style={styles.activeDot} />}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  sidebar: {
    width: 60,
    backgroundColor: '#9057E5',
    paddingTop: 30,
    paddingBottom: 20,
    alignItems: 'center',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: 'space-between',
  },
  avatarContainer: {
  position: 'absolute',
  top: -15,
  left: 30, // Move avatar to the right, overlapping the sidebar
  zIndex: 10, // Ensure it's on top
},

avatar: {
  width: 45,
  height: 45,
  borderRadius: 22.5,
  borderWidth: 2,
  borderColor: '#fff',
},

  iconGroup: {
    flex: 1,
    justifyContent: 'center',
  },
  iconWrapper: {
    marginVertical: 18,
    alignItems: 'center',
  },
  icon: {
    padding: 5,
  },
  activeDot: {
    width: 6,
    height: 6,
    backgroundColor: '#fff',
    borderRadius: 3,
    marginTop: 4,
  },
  bottomIcon: {
    marginBottom: 10,
  },
});

export default Sidebar;
