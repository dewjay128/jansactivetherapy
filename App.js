/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

function HomeScreen({ navigation }) {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <SafeAreaView style={backgroundStyle}>
       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
       <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
            <TouchableOpacity style={styles.sectionContainer} onPress={() => navigation.navigate('Details')}>
              <Text>All Fours</Text>
            </TouchableOpacity>
            <View style={styles.sectionContainer}>
              <Text>Sideline</Text>
            </View>
            <TextInput
              style={{  height: 40,
                margin: 12,
                borderWidth: 1}}
              onChangeText={() => {}}
              value={"text"}
            />
                     <View style={styles.sectionContainer}>
              <Text>All Fours</Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text>Sideline</Text>
            </View>
        </View>
      </ScrollView>
    </SafeAreaView>
    </View>
  );
}

const DetailsScreen = () => {
  return     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  <Text>Home Screen</Text></View>
}

const Stack = createStackNavigator();

const App: () => Node = () => {


  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 10,
    padding: 24,
    backgroundColor: 'red',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
