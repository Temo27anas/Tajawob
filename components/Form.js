import React, { useState } from "react";
import { Input as RNKTextInput } from "@ui-kitten/components";
import { StyleSheet, Text, Image, View } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Form = () => {
  const [rectangleTextInput, setRectangleTextInput] = useState();

  return (
    <View style={styles.form}>
      <RNKTextInput
        style={styles.formChild}
        placeholder="Place your text"
        value={rectangleTextInput}
        onChangeText={setRectangleTextInput}
      />
      <Text style={styles.adresse}>Adresse *</Text>
      <Image
        style={styles.image1Icon}
        resizeMode="cover"
        source={require("../assets/image-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  formChild: {
    top: 150,
    left: 0,
    borderRadius: Border.br_mini,
    backgroundColor: Color.gray_100,
    borderStyle: "solid",
    borderColor: "#032a3b",
    borderWidth: 1.5,
    width: 317,
    position: "absolute",
  },
  adresse: {
    top: 45,
    left: 15,
    fontSize: FontSize.size_lgi,
    fontFamily: FontFamily.skModernistRegular,
    color: Color.darkslategray,
    textAlign: "left",
    width: 103,
    height: 37,
    position: "absolute",
  },
  image1Icon: {
    top: 0,
    left: 169,
    borderRadius: Border.br_4xs,
    width: 143,
    height: 128,
    position: "absolute",
  },
  form: {
    width: 312,
    height: 232,
    marginTop: 32,
  },
});

export default Form;
