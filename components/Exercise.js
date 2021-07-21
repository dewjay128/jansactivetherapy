import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Carousel} from './Carousel';
import MessageIcon from './assets/message.svg';

// const images = [
//   'https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
//   'https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80',
//   'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
//   'https://images.unsplash.com/photo-1429087969512-1e85aab2683d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
//   'https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
// ];

const Exercise = ({
  route: {
    params: {exercise},
  },
}) => {
  return (
    <SafeAreaView>
      <View
        style={{
          height: '100%',
        }}>
        <Carousel
          images={[
            require('./assets/90-90-hip-lift.png'),
            require('./assets/standing-supported.png'),
          ]}
        />
        <ScrollView style={{flex: 1, paddingHorizontal: 12}}>
          {/* Header */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              marginBottom: 10,
            }}>
            <Text style={{color: 'black', fontSize: 20}}>{exercise.name}</Text>
            {/* <Image source={MessageIcon} style={{height: 10, width: 10}} /> */}
            <TouchableOpacity style={{alignItems: 'center'}}>
              <MessageIcon height={16} width={15} />
              <Text style={{fontSize: 12}}>Chat with Nick</Text>
            </TouchableOpacity>
          </View>
          {/* Muscles */}
          <View>
            <Text style={{color: 'black', fontSize: 16}}>Muscles</Text>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                paddingTop: 10,
                paddingBottom: 10,
                color: 'black',
                fontSize: 20,
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
                      fontSize: 12,
                    }}>
                    {muscle}
                  </Text>
                </View>
              ))}
            </View>
          </View>
          {/* Directions */}
          <View style={{paddingTop: 12}}>
            <Text style={{color: 'black', fontSize: 16, marginBottom: 10}}>
              Directions
            </Text>
            <View>
              {exercise.directions.map((direction, index) => (
                <View
                  style={{
                    flexDirection: 'row',
                    marginBottom: 10,
                  }}>
                  <View
                    style={{
                      borderWidth: 1,
                      borderColor: '#dee6ed',
                      borderRadius: 9999,
                      width: 20,
                      height: 20,
                      alignItems: 'center',
                      backgroundColor: '#dee6ed',
                      marginRight: 10,
                    }}>
                    <Text style={{color: '#4a5667'}}>{index + 1}</Text>
                  </View>
                  <View style={{paddingRight: 50}}>
                    <Text style={{fontSize: 12}} key={index}>
                      {direction}
                    </Text>
                  </View>
                </View>
              ))}
            </View>
          </View>
          <View style={{paddingTop: 12}}>
            <Text style={{color: 'black', fontSize: 16}}>Common mistakes</Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundVideo: {
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // bottom: 0,
    // right: 0,
  },
});

export default Exercise;
