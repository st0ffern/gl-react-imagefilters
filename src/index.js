import React, {PropTypes} from 'react'

import GL from 'gl-react'
import {Negative} from 'gl-react-negative'
import {HueRotate} from 'gl-react-hue-rotate'
import {ContrastSaturationBrightness} from 'gl-react-contrast-saturation-brightness'
import {Blur} from 'gl-react-blur'
import {Sepia} from 'gl-react-sepia'
import {Sharpen} from 'gl-react-sharpen'
import {Temperature} from 'gl-react-temperature'

export default GL.createComponent(
({
  children,
  width,
  height,
  hue,
  blur,
  sepia,
  sharpen,
  negative,
  contrast,
  saturation,
  brightness,
  temperature,
  uBrightness,
  uTemperature,
  uSharpen,
}) =>

<Sepia sepia={sepia}>
  <HueRotate hue={hue}>
    <Negative factor={negative}>
      <Temperature temp={temperature}>
        <ContrastSaturationBrightness
          contrast={contrast}
          saturation={saturation}
          brightness={brightness}>
            <Blur
              passes={6}
              factor={blur}
              width={width}
              height={height}>
                <Sharpen
                  factor={sharpen}
                  width={width}
                  height={height}>
                    {children}
                </Sharpen>
            </Blur>
        </ContrastSaturationBrightness>
      </Temperature>
    </Negative>
  </HueRotate>
</Sepia>,

{
  displayName: "ImageFilter",
  defaultProps: {
    width: 300,
    height: 300,
    hue: 0,
    blur: 0,
    sepia: 0,
    sharpen: 0,
    negative: 0,
    contrast: 1,
    saturation: 1,
    brightness: 1,
    temperature: 6500,
    uBrightness: 1,
    uTemperature: 0,
    uSharpen: 0,
  },
  propTypes: {
    children: PropTypes.node.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    hue: PropTypes.number,
    blur: PropTypes.number,
    sepia: PropTypes.number,
    sharpen: PropTypes.number,
    negative: PropTypes.number,
    contrast: PropTypes.number,
    saturation: PropTypes.number,
    brightness: PropTypes.number,
    temperature: PropTypes.number,
  }
});
