# Gesture Slider modal for react native and expo by adlerware.

# Repo :- https://github.com/parallex12/SweetSlide.git

## Getting Started

1. Installation

   - Using npm: `npm i sweet-slider-expo`

## Usage

```javascript
import RangeSlider from "react-native-range-slider";
```

```JSX
 <SweetSlide
      containerInnerStyle={{ backgroundColor: "red" }}
      containerStyle={{ backgroundColor: "red" }}
      height={500}
      popup={props?.popup}
      setPopup={props?.setPopup}
    >
    <Text>Hello</Text>
    </SweetSlide>
```

## API

| Property |      Description      |  Type  |
|----------|:-------------:|----------|
| containerStyle |  Style for main container | object 
| containerInnerStyle |  Style for inner content container | object 
| height |  the height for the slider | Number(float) |
| children |  pass the inner tags inclide <SweetSlider>   |   JSX |
| onClose | Fires when modal closes  | function |

## Acknowledgement

   * <a href="https://github.com/parallex12/SweetSlide.git">SweetSlider</a>, which this module is based on.


## How to contribute ?
You are interested and want to contribute? Awesome, just consider the following steps:

1. Fork this repository.
2. Add and test the fixes/improvements you worked on to a seperate branch.
3. Submit your pull request(PR).