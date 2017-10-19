# gl-react-imagefilters ![](https://img.shields.io/npm/v/gl-react-imagefilters.svg) ![](https://img.shields.io/badge/gl--react->= 2.1-05F561.svg) ![](https://img.shields.io/badge/gl--react-dom%20%7C%20native-f90.svg)

[![Greenkeeper badge](https://badges.greenkeeper.io/stoffern/gl-react-imagefilters.svg)](https://greenkeeper.io/)
Image filters for gl-react and gl-react-native

## Props

- `children` **(required)**: the content to negate.
- `sepia`: optionally the intensity of the effect. 1.0 is normal. higher than 1 will add sepia.
- `hue`: optional input to adjust the hue filter (Default: 0 )
- `blur`: optional input to adjust the blur filter (Default: 0 )
- `sepia`: optional input to adjust the sepia filter (Default: 0 )
- `sharpen`: optional input to adjust the sharpen filter (Default: 0 )
- `negative`: optional input to adjust the negative filter (Default: 0 )
- `contrast`: optional input to adjust the contrast filter (Default: 1 )
- `saturation`: optional input to adjust the saturation filter (Default: 1 )
- `brightness`: optional input to adjust the brightness filter (Default: 1 )
- `temperature`: optional input to adjust the temperature filter (Default: 6500, Normal range: 2000-12000 )

## Usage Examples

```js
var ImageFilter = require("gl-react-imagefilters");
// or
import ImageFilter from "gl-react-imagefilters";
```

```html
<Surface width={300} height={300}>
   <ImageFilter sepia={3} blur={2}>...</ImageFilter>
</Surface>
```

```html
<Surface width={300} height={200}>
   <ImageFilter sepia={3} blur={2}>
    <GLImage
      source="https://unsplash.it/200/300"
      imageSize={{ width: 300, height: 200 }}
      resizeMode="cover" />
   </ImageFilter>
</Surface>
```
