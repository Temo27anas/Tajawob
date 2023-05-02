import React, { useState } from "react";
import { Input as RNKTextInput } from "@ui-kitten/components";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const FrameComponent11 = () => {
  const [rectangleTextInput, setRectangleTextInput] = useState();
  const [rectangleTextInput1, setRectangleTextInput1] = useState();
  const [rectangleTextInput2, setRectangleTextInput2] = useState();

  return (
    <View style={styles.emailParent}>
      <View style={styles.email}>
        <View>
          <RNKTextInput
            style={styles.emailformChild}
            placeholder="Password"
            value={rectangleTextInput}
            onChangeText={setRectangleTextInput}
          />
          <Text style={[styles.email1, styles.email1Layout]}>Email</Text>
        </View>
      </View>
      <View style={styles.mdp}>
        <Text style={[styles.email2, styles.emailTypo]}>Email</Text>
        <View style={styles.motdepassform}>
          <RNKTextInput
            style={styles.emailformChild}
            placeholder="Email"
            value={rectangleTextInput1}
            onChangeText={setRectangleTextInput1}
          />
          <Text style={[styles.motDePasse, styles.motTypo]}>Mot de passe</Text>
        </View>
      </View>
      <View style={styles.mdp}>
        <Text style={[styles.motDePass, styles.motTypo]}>Mot de passe</Text>
        <View style={styles.motdepassform}>
          <RNKTextInput
            style={styles.emailformChild}
            placeholder="Password"
            value={rectangleTextInput2}
            onChangeText={setRectangleTextInput2}
          />
          <Text style={[styles.motDePasse, styles.motTypo]}>Mot de passe</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  email1Layout: {
    height: 31,
    color: Color.gray_200,
    display: "none",
  },
  emailTypo: {
    textAlign: "left",
    fontFamily: FontFamily.nunitoMedium,
    fontWeight: "500",
    fontSize: FontSize.size_lgi,
  },
  motTypo: {
    width: 115,
    textAlign: "left",
    fontFamily: FontFamily.nunitoMedium,
    fontWeight: "500",
    fontSize: FontSize.size_lgi,
  },
  emailformChild: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.gray_100,
    borderStyle: "solid",
    borderColor: "#032a3b",
    borderWidth: 1.5,
    width: 312,
  },
  email1: {
    width: 48,
    marginTop: 20,
    textAlign: "left",
    fontFamily: FontFamily.nunitoMedium,
    fontWeight: "500",
    fontSize: FontSize.size_lgi,
  },
  email: {
    display: "none",
  },
  email2: {
    color: Color.darkslategray,
  },
  motDePasse: {
    marginLeft: -299,
    height: 31,
    color: Color.gray_200,
    display: "none",
  },
  motdepassform: {
    height: 92,
    flexDirection: "row",
    paddingTop: Padding.p_21xl,
    justifyContent: "flex-end",
    marginTop: -27,
    alignItems: "center",
  },
  mdp: {
    marginTop: 21,
  },
  motDePass: {
    color: Color.darkslategray,
  },
  emailParent: {
    height: 214,
    paddingBottom: Padding.p_4xs,
    justifyContent: "center",
    marginTop: 49,
    alignItems: "center",
    width: 312,
  },
});

export default FrameComponent11;
