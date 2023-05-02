import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const FrameComponent6 = () => {
  return (
    <View style={styles.vectorParent}>
      <Image
        style={[styles.frameChild, styles.lineIconPosition]}
        resizeMode="cover"
        source={require("../assets/line-22.png")}
      />
      <Image
        style={[styles.frameItem, styles.frameLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-4.png")}
      />
      <Text style={[styles.text, styles.textTypo]}>2</Text>
      <Image
        style={[styles.frameInner, styles.frameLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <Image
        style={[styles.lineIcon, styles.lineIconPosition]}
        resizeMode="cover"
        source={require("../assets/line-211.png")}
      />
      <Text style={[styles.text1, styles.textTypo]}>3</Text>
      <Image
        style={[styles.lineIcon, styles.lineIconPosition]}
        resizeMode="cover"
        source={require("../assets/line-2.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.frameLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../assets/vector-39.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  lineIconPosition: {
    height: 2,
    top: 28,
    position: "absolute",
  },
  frameLayout: {
    width: 54,
    top: 0,
    position: "absolute",
    height: 54,
  },
  textTypo: {
    textAlign: "right",
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
    textTransform: "uppercase",
    fontSize: FontSize.size_8xl,
    top: 10,
    position: "absolute",
  },
  frameChild: {
    left: 53,
    width: 59,
  },
  frameItem: {
    left: 111,
  },
  text: {
    left: 130,
    color: Color.white,
  },
  frameInner: {
    left: 219,
  },
  lineIcon: {
    left: 164,
    width: 56,
  },
  text1: {
    left: 237,
    color: Color.crimson_200,
  },
  ellipseIcon: {
    left: 0,
  },
  vectorIcon: {
    top: 21,
    left: 15,
    width: 23,
    height: 17,
    position: "absolute",
  },
  vectorParent: {
    width: 273,
    marginTop: 32,
    height: 54,
  },
});

export default FrameComponent6;
