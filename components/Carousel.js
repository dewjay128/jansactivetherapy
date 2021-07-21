import * as React from 'react';
import {StyleSheet, View, ScrollView, Dimensions, Image} from 'react-native';
import YouTube from 'react-native-youtube';

class Carousel extends React.Component {
  scrollRef = React.createRef();
  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: 0,
    };
    this.scrollRef = React.createRef();
  }

  setSelectedIndex = event => {
    const contentOffset = event.nativeEvent.contentOffset;
    const viewSize = event.nativeEvent.layoutMeasurement;

    // Divide the horizontal offset by the width of the view to see which page is visible
    const selectedIndex = Math.floor(contentOffset.x / viewSize.width);
    this.setState({selectedIndex});
  };

  render() {
    const {images} = this.props;
    const {selectedIndex} = this.state;
    const testing = [
      <YouTube
        videoId="4GoqjoEXaAw" // The YouTube video ID
        // play // control playback of video with true/false
        // fullscreen // control whether the video should play in fullscreen or inline
        // loop // control whether the video should loop when ended
        // onReady={e => this.setState({isReady: true})}
        // onChangeState={e => this.setState({status: e.state})}
        // onChangeQuality={e => this.setState({quality: e.quality})}
        // onError={e => this.setState({error: e.error})}
        style={{
          alignSelf: 'stretch',
          height: '100%',
          width: Dimensions.get('window').width,
        }}
      />,
      ...images.map((image, i) => (
        <Image style={styles.backgroundImage} source={image} key={i} />
      )),
    ];
    return (
      <View style={{height: '50%', width: '100%'}}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          onMomentumScrollEnd={this.setSelectedIndex}
          ref={this.scrollRef}>
          {testing}
        </ScrollView>
        <View style={styles.circleDiv}>
          {testing.map((_, i) => (
            <View
              style={[
                styles.whiteCircle,
                {opacity: i === selectedIndex ? 0.5 : 1},
              ]}
              key={i}
              active={i === selectedIndex}
            />
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    height: '100%',
    width: Dimensions.get('window').width,
  },
  circleDiv: {
    // position: 'absolute',
    // bottom: 15,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    // width: '100%',
    // height: 10,
  },
  whiteCircle: {
    width: 6,
    height: 6,
    borderRadius: 3,
    margin: 5,
    backgroundColor: 'gray',
  },
});

export {Carousel};
