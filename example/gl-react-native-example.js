import React,{ Component } from 'react';

import {Surface} from 'gl-react-native'
import ImageFilter from '../src/'
const {Image: GLImage} = require('gl-react-image');

export default class App extends Component {

  render() {
    return (
      <Surface width={450} height={300}>
        <ImageFilter sepia={1.5} blur={1} sharpen={1.5}>
          <GLImage
            source={{
              uri: "https://unsplash.it/450/350", 
              width: "450", 
              height: "300"
            }}
            resizeMode="cover"
          />
        </ImageFilter>
      </Surface>
    );
  }
}
