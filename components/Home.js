import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

import {todaysExercise, colors} from './constants';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView
      style={{backgroundColor: '#F8F8F8', padding: 5, height: '100%'}}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <TextInput
          style={{
            padding: 15,
            margin: 20,
            borderRadius: 20,
            backgroundColor: '#E8E8E8',
          }}
          placeholder="Search Exercises"
        />
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 20,
            alignItems: 'baseline',
          }}>
          <Text style={{fontSize: 22, fontWeight: 'bold'}}>
            Today's Exercises
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('AllExercises')}>
            <Text>See All</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            display: 'flex',
            flex: 1,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-evenly',
          }}>
          {todaysExercise.map((exercise, i) => (
            <TouchableOpacity
              key={exercise.name}
              style={{
                ...styles.sectionContainer,
                backgroundColor: colors[i],
              }}
              onPress={() => navigation.navigate('Exercise', {exercise})}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>
                {exercise.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    width: '45%',
    height: 150,
    marginTop: 10,
    padding: 16,
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
  },
});

export default HomeScreen;
