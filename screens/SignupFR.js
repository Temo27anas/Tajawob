import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Inputs1 from "../components/Inputs1";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const SignupFR = () => {
  return (
    <View style={styles.signupfr}>
      <Image
        style={styles.signupfrChild}
        resizeMode="cover"
        source={require("../assets/frame-471.png")}
      />
      <View style={styles.sinscrireWrapper}>
        <Text style={styles.sinscrire}>S'inscrire</Text>
      </View>
      <Inputs1 />
    </View>
  );
};

const styles = StyleSheet.create({
  signupfrChild: {
    width: 201,
    height: 67,
  },
  sinscrire: {
    fontSize: FontSize.size_12xl,
    fontWeight: "700",
    fontFamily: FontFamily.skModernistBold,
    color: Color.darkslategray,
    textAlign: "left",
    width: 137,
  },
  sinscrireWrapper: {
    width: 164,
    height: 259,
    paddingTop: Padding.p_16xl,
    paddingBottom: Padding.p_114xl,
    alignItems: "center",
  },
  signupfr: {
    backgroundColor: Color.whitesmoke,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    paddingHorizontal: Padding.p_mini,
    paddingVertical: 0,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SignupFR;
