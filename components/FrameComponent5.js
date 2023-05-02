import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const FrameComponent5 = () => {
  return (
    <View style={styles.vectorParent}>
      <Image
        style={[styles.frameChild, styles.framePosition]}
        resizeMode="cover"
        source={require("../assets/line-2.png")}
      />
      <Image
        style={[styles.frameItem, styles.framePosition]}
        resizeMode="cover"
        source={require("../assets/line-21.png")}
      />
      <Image
        style={[styles.frameChild, styles.framePosition]}
        resizeMode="cover"
        source={require("../assets/line-2.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.frameChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector-39.png")}
      />
      <Image
        style={[styles.frameChild1, styles.frameChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <Image
        style={[styles.frameChild2, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector-39.png")}
      />
      <Image
        style={[styles.frameChild3, styles.frameChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-4.png")}
      />
      <Text style={styles.text}>3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  framePosition: {
    height: 2,
    top: 28,
    position: "absolute",
  },
  frameChildLayout: {
    width: 54,
    top: 0,
    position: "absolute",
    height: 54,
  },
  vectorIconLayout: {
    height: 17,
    width: 23,
    top: 21,
    position: "absolute",
  },
  frameChild: {
    left: 164,
    width: 56,
  },
  frameItem: {
    left: 53,
    width: 59,
  },
  ellipseIcon: {
    left: 0,
  },
  vectorIcon: {
    left: 15,
  },
  frameChild1: {
    left: 111,
  },
  frameChild2: {
    left: 128,
  },
  frameChild3: {
    left: 219,
  },
  text: {
    top: 10,
    left: 238,
    fontSize: FontSize.size_8xl,
    textTransform: "uppercase",
    fontWeight: "700",
    fontFamily: FontFamily.dMSansBold,
    color: Color.white,
    textAlign: "right",
    position: "absolute",
  },
  vectorParent: {
    width: 273,
    marginTop: 32,
    height: 54,
  },
});

export default FrameComponent5;
