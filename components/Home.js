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
} from 'react-native';

const colors = [
  '#FB6542',
  '#FFBB00',
  '#375E97',
  '#3F681C',
  '#F98866',
  '#FF420E',
  '#80BD9E',
  '#89DA59',
];

const data = [
  {
    name: 'All Fours',
    picture: null,
    description: 'lay on all fours',
    target: 'relax back',
  },
  {
    name: 'Sideline',
    picture: null,
    description: 'lay on side',
    target: 'groin, back pocket',
  },
  {
    name: 'All Fours',
    picture: null,
    description: 'lay on all fours',
    target: 'relax back',
  },
  {
    name: 'Sideline',
    picture: null,
    description: 'lay on side',
    target: 'groin, back pocket',
  },
];

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
        <Text style={{fontSize: 22, fontWeight: 'bold', padding: 20}}>
          Todays Exercise
        </Text>
        <View
          style={{
            display: 'flex',
            flex: 1,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-evenly',
          }}>
          {data.map((exercise, i) => (
            <TouchableOpacity
              style={{
                ...styles.sectionContainer,
                backgroundColor: colors[i],
              }}
              onPress={() => navigation.navigate('Details')}>
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
    padding: 24,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
  },
});

export default HomeScreen;
