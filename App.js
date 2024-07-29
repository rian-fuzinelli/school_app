import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/AntDesign';
import EnsinoIntegrado from './components/Ensinointegrado';
import EnsinoMedio from './components/Ensinomedio';
import Home from './components/Home';
import QuemSomos from './components/Quemsomos';



const Drawer = createDrawerNavigator();
function Logo() {
  return (
    <View style={styles.logoContainer}>
      <Icon name="close" size={30} color="white" style={styles.closeIcon} />
    </View>
  );
}

function DrawerMenu() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#b20000',
          width: '100%',
        },
        drawerLabelStyle: {
          color: 'white',
          fontSize: 17,
        },
      }}
    >
      <Drawer.Screen 
        name="Home" 
        component={Home} 
        options={{
          headerRight: () => (
            <View style={styles.headerRightContainer}>
            </View>
          ),
        }}
      />
      <Drawer.Screen name="Certificação de Competências" component={QuemSomos} />
      <Drawer.Screen name="Vestibulinho" component={EnsinoIntegrado} />
      <Drawer.Screen name="Notícias" component={EnsinoMedio} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  logoImage: {
    width: 150,
    height: 50,
    resizeMode: 'contain',
  },
  headerRightContainer: {
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeIcon: {
    flexDirection: 'row',
    marginLeft: 10
  },
});

export default function App() {
  return (
    <NavigationContainer>
      <DrawerMenu />
    </NavigationContainer>
  );
}
