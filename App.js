import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Screen1 from './screens/screen1'
import Screen2 from './screens/screen2'
import Screen3 from './screens/screen3'

const Tab = createBottomTabNavigator()


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown:false}}>
        <Tab.Screen name='Screen1' component={Screen1}/>
        <Tab.Screen name='Screen2' component={Screen2}/>
        <Tab.Screen name='Screen3' component={Screen3}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
