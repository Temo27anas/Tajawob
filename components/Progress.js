import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const Progress = () => {
  return (
    <View style={styles.progress}>
      <Image
        style={[styles.progressChild, styles.progressLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-4.png")}
      />
      <Text style={styles.text}>1</Text>
      <Image
        style={[styles.progressItem, styles.lineIconPosition]}
        resizeMode="cover"
        source={require("../assets/line-22.png")}
      />
      <Image
        style={[styles.progressInner, styles.progressLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <Text style={[styles.text1, styles.textTypo]}>2</Text>
      <Image
        style={[styles.ellipseIcon, styles.progressLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={[styles.lineIcon, styles.lineIconPosition]}
        resizeMode="cover"
        source={require("../assets/line-211.png")}
      />
      <Text style={[styles.text2, styles.textTypo]}>3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  progressLayout: {
    width: 54,
    top: 0,
    position: "absolute",
    height: 54,
  },
  lineIconPosition: {
    height: 2,
    top: 28,
    position: "absolute",
  },
  textTypo: {
    color: Color.crimson_200,
    textAlign: "right",
    fontWeight: "700",
    textTransform: "uppercase",
    fontSize: FontSize.size_8xl,
    top: 10,
    position: "absolute",
  },
  progressChild: {
    left: 0,
  },
  text: {
    left: 22,
    color: Color.white,
    textAlign: "right",
    fontWeight: "700",
    textTransform: "uppercase",
    fontSize: FontSize.size_8xl,
    top: 10,
    fontFamily: FontFamily.dMSansBold,
    position: "absolute",
  },
  progressItem: {
    left: 50,
    width: 59,
  },
  progressInner: {
    left: 108,
  },
  text1: {
    left: 126,
    fontFamily: FontFamily.nunitoBold,
  },
  ellipseIcon: {
    left: 216,
  },
  lineIcon: {
    left: 161,
    width: 56,
  },
  text2: {
    left: 234,
    fontFamily: FontFamily.dMSansBold,
    color: Color.crimson_200,
  },
  progress: {
    width: 277,
    marginTop: 32,
    height: 54,
  },
});

export default Progress;
