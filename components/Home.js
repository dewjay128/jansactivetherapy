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
import HipLift from './assets/90-90-hip-lift.png';
import HipShift from './assets/90-90-hip-shift.png';
import Sidelying from './assets/sidelying.png';
import StandingSupported from './assets/standing-supported.png';

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
    name: '90-90 Hip Lift',
    directions: [
      'Lie on your back with your feet flat on a wall and your knees and hips bent at a 90-degree angle.',
      'Place a 4-6 inch ball between your knees.',
      'Inhale through your nose and exhale through your mouth, performing a pelvic tilt so that your tailbone is raised slightly off the mat. Keep your back flat on the mat. Do not press your feet into the wall, instead dig down with your heels. You should feel the muscles on the back of your thighs engage.',
      'Hold this position while you take 4-5 deep breaths, in through your nose and out through your mouth.',
      'Relax and repeat 4 more times.',
    ],
    target: ['hamstrings', 'inner groin', 'obliques'],
    video: '4GoqjoEXaAw',
    img: HipLift,
  },
  {
    name: 'Sidelying',
    directions: [
      'Lie on your right side with your feet on a wall with your hips and knees at a 90-degree angle, ankles and knees together and your back rounded. Place a pillow under your head and keep your back and neck relaxed.',
      'Place an appropriate size bolster between your feet and a towel between your knees. Your left knee should be lower than your left hip and ankle.',
      'Push your right foot into wall.',
      'Begin by inhaling slowly through your nose as you pull back your left leg.',
      'Exhale through your mouth as you squeeze your left knee down into the towel for 3 seconds.',
      'Inhale again as you pull back your left leg further. You should begin to feel your left inner thigh engage.',
      'Exhale and squeeze your left knee down.',
      'Continue the sequence until you have completed 4-5 breaths in and out. Attempt to pull back your left leg further each time you inhale.',
      'Relax your knees back to the starting position and repeat the sequence 4 more times.',
    ],

    target: ['inner groin', 'back pocket', 'hamstrings'],
    img: Sidelying,
  },
  {
    name: 'Standing Supported',
    directions: [
      'Stand against a desk or counter, and place your left foot on a 1/2 to 1-inch block.',
      'Place your hands on the surface in front of you and round your back (tuck your bottom).',
      'Keeping your back rounded, shift your left hip back. You should feel a stretch in your left back pocket (buttock).',
      'Squat down by bending both knees. Maintaining a stretch in your left back pocket (buttock), pull your left knee in slightly. You should feel the muscles on the front of both thighs, your left outer hip (buttock), and your left inner thigh engage.',
      'Hold this position while you take 4-5 deep breaths, in through your nose and out through your mouth.',
      'Relax and repeat 4 more times.',
    ],
    target: ['back pocket', 'hamstrings', 'inner groin', 'obliques'],
    img: StandingSupported,
  },
  {
    name: '90-90 Hip Shift',
    directions: [
      'Lie on your back with your feet flat on a wall and your knees and hips bent at a 90-degree angle.',
      'Place a 4-6 inch ball between your knees.',
      'Place your right arm above your head and a balloon in your left hand.',
      'Inhale through your nose and as you exhale through your mouth, perform a pelvic tilt so that your tailbone is raised slightly off the mat. Keep your low back flat on the mat. Do not press your feet flat into the wall instead dig down with your heels.',
      'Shift your left knee down so that it is below the level of your right without moving your feet and press your left knee into the ball. You should feel your left inner thigh engage.',
      'With your left knee shifted down, take your right foot off the wall. You should feel the back of your left thigh engage. Maintain this position for the remainder of the exercise.',
      'Now inhale through your nose and slowly blow out into the balloon.',
      'Pause three seconds with your tongue on the roof of your mouth to prevent airflow out of the balloon.',
      'Without pinching the neck of the balloon and keeping your tongue on the roof of your mouth, inhale again through your nose.',
      'Slowly blow out as you stabilize the balloon with your hand.',
      'Do not strain your neck or cheeks as you blow.',
      'After the fourth breath in, pinch the balloon neck and remove it from your mouth. Let the air out of the balloon.',
      'Relax and repeat the sequence 4 more times.',
    ],
    target: ['hamstrings', 'inner groin', 'obliques'],
    img: HipShift,
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
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 20,
            alignItems: 'baseline',
          }}>
          <Text style={{fontSize: 22, fontWeight: 'bold'}}>
            Todays Exercise
          </Text>
          <Text>See All</Text>
        </View>
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
