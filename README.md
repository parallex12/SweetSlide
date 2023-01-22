### Gesture Slider modal for react native and expo by adlerware.

#### Repo :- https://github.com/parallex12/SweetSlide.git

## Getting Started

1. Installation

   - Using npm: `npm i sweet-slider-expo`

## Usage

```javascript
import SweetSlide from "sweet-slider-expo";
```

```JSX
import React, { useState} from "react";
import SweetSlide from "sweet-slider-expo";
import {Text,View,Button} from "react-native";
const App = () => {
  const [popup,setPopup]=useState(false)

  return (
    <View style={{ flex: 1 }}>
      <SweetSlide
        containerInnerStyle={{ backgroundColor: "red" }}
        containerStyle={{ backgroundColor: "red" }}
        height={500}
        popup={popup}
        setPopup={setPopup}
      >
        <Text>Hello</Text>
      </SweetSlide>
      <Button title="open" onPress={() => setPopup(true)} />
      <Button title="close" onPress={() => setPopup(false)} />
    </View>
  );
};

```

## API

| Property            |                Description                | Type          |
| ------------------- | :---------------------------------------: | ------------- |
| popup               |      pass popup state to open close       | useState      |
| setPopup            |     pass setPopup state to open close     | useState      |
| containerStyle      |         Style for main container          | object        |
| containerInnerStyle |     Style for inner content container     | object        |
| height              |         the height for the slider         | Number(float) |
| children            | pass the inner tags inclide <SweetSlider> | JSX           |

## Acknowledgement

- <a href="https://github.com/parallex12/SweetSlide.git">SweetSlider</a>, which this module is based on.

## How to contribute ?

You are interested and want to contribute? Awesome, just consider the following steps:

1. Fork this repository.
2. Add and test the fixes/improvements you worked on to a seperate branch.
3. Submit your pull request(PR).
