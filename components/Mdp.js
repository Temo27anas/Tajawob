import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Input as RNKTextInput } from "@ui-kitten/components";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const Mdp = () => {
  const [rectangleTextInput1, setRectangleTextInput1] = useState();

  return (
    <View style={styles.mdp}>
      <Text style={styles.ville}>Ville *</Text>
      <View style={styles.motdepassform}>
        <RNKTextInput
          style={styles.motdepassformChild}
          placeholder="Place your text"
          value={rectangleTextInput1}
          onChangeText={setRectangleTextInput1}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ville: {
    fontSize: FontSize.size_lgi,
    fontFamily: FontFamily.skModernistRegular,
    color: Color.darkslategray,
    textAlign: "left",
    width: 101,
  },
  motdepassformChild: {
    flex: 1,
    borderRadius: Border.br_mini,
    backgroundColor: Color.gray_100,
    borderStyle: "solid",
    borderColor: "#032a3b",
    borderWidth: 1.5,
  },
  motdepassform: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingTop: Padding.p_21xl,
    alignItems: "center",
    justifyContent: "flex-end",
    marginTop: -23,
  },
  mdp: {
    width: 329,
    marginTop: 32,
  },
});

export default Mdp;
