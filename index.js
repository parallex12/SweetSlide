import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
  Animated,
  ScrollView,
} from "react-native";
import { connect } from "react-redux";
import SlidingUpPanel from "rn-sliding-up-panel";

const SweetSlide = (props) => {
  const animeRef = useRef(0);
  let animatedValue = new Animated.Value(0);

  useEffect(() => {
    if (props?.popup) {
      animeRef.current.show();
    }
  }, [props?.popup]);
  const onClose = async (val) => {
    if (val == 0) {
      props?.setPopup(false);
    }
  };

  return (
    <SlidingUpPanel
      ref={animeRef}
      onMomentumDragEnd={(value, gesture) => onClose(value)}
      draggableRange={{
        top: props?.height || 500,
        bottom: 0,
      }}
      animatedValue={animatedValue}
      containerStyle={[styles.cont, { ...props?.containerStyle }]}
      height={props?.height || 500}
      showBackdrop={false}
      allowMomentum
      allowDragging
    >
      <View style={[styles.cont, { ...props?.containerInnerStyle }]}>
        <ScrollView>{props?.children}</ScrollView>
      </View>
    </SlidingUpPanel>
  );
};

const styles = StyleSheet.create({
  cont: {
    height: "100%",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: "#e7e7e7",
    zIndex: 999999,
  },
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(SweetSlide);
