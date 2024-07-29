// components/Sidebar.js
import React from 'react';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { View, Image, StyleSheet } from 'react-native';

const Sidebar = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.logoContainer}>
        <Icon name="close" size={30} color="white" style={styles.closeIcon} />
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  logoImage: {
    width: 200,
    height: 60,
    resizeMode: 'contain',
  },
});

export default Sidebar;
