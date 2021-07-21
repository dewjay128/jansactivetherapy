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
import {data, colors} from './constants';

const AllExercises = ({navigation}) => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: '#F8F8F8',
        padding: 5,
        height: '100%',
      }}>
      <TextInput
        style={{
          padding: 15,
          margin: 20,
          borderRadius: 20,
          backgroundColor: '#E8E8E8',
        }}
        placeholder="Search Exercises"
      />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={{display: 'flex', justifyContent: 'space-between'}}>
          {data.map(exercise => (
            <TouchableOpacity
              style={{
                backgroundColor: 'white',
                borderRadius: 15,
                padding: 20,
                marginHorizontal: 20,
                marginTop: 10,
                shadowColor: '#000',
                shadowOffset: {width: 0, height: 1},
                shadowOpacity: 0.2,
                shadowRadius: 2,
                elevation: 5,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
              onPress={() => navigation.navigate('Exercise', {exercise})}>
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 10,
                  backgroundColor: colors[Math.floor(Math.random() * 8)],
                }}></View>
              <View style={{marginLeft: 40}}>
                <Text style={{marginBottom: 5}}>{exercise.name}</Text>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                  }}>
                  {exercise.target.map(muscle => (
                    <View
                      style={{
                        borderColor: '#e2e8f0',
                        borderWidth: 1,
                        borderRadius: 9999,
                        backgroundColor: '#bee3f8',
                        paddingHorizontal: 12,
                        paddingVertical: 4,
                        marginRight: 4,
                      }}
                      key={muscle}>
                      <Text
                        style={{
                          color: '#2b6cb0',
                          textTransform: 'uppercase',
                          fontWeight: 'bold',
                          fontSize: 5,
                        }}>
                        {muscle}
                      </Text>
                    </View>
                  ))}
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AllExercises;
