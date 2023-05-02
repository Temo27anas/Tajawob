import React, { useState, useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Input as RNKTextInput } from "@ui-kitten/components";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Mdp1 = ({
  commentaire,
  rectangle7Placeholder,
  propWidth,
  propAlignSelf,
}) => {
  const [rectangleTextInput, setRectangleTextInput] = useState();
  const mdpStyle = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
      ...getStyleValue("alignSelf", propAlignSelf),
    };
  }, [propWidth, propAlignSelf]);

  return (
    <View style={[styles.mdp, mdpStyle]}>
      <Text style={[styles.commentaire, styles.motDePasseTypo]}>
        {commentaire}
      </Text>
      <View style={styles.motdepassform}>
        <RNKTextInput
          style={styles.motdepassformChild}
          placeholder={rectangle7Placeholder}
          value={rectangleTextInput}
          onChangeText={setRectangleTextInput}
        />
        <Text style={[styles.motDePasse, styles.motDePasseTypo]}>
          Mot de passe
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  motDePasseTypo: {
    textAlign: "left",
    fontSize: FontSize.size_lgi,
  },
  commentaire: {
    fontFamily: FontFamily.nunitoRegular,
    color: Color.darkslategray,
  },
  motdepassformChild: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.gray_100,
    borderStyle: "solid",
    borderColor: "#032a3b",
    borderWidth: 1.5,
    flex: 1,
  },
  motDePasse: {
    fontWeight: "500",
    fontFamily: FontFamily.nunitoMedium,
    color: Color.gray_200,
    display: "none",
    marginLeft: -299,
    flex: 1,
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
    width: 316,
    marginTop: 32,
  },
});

export default Mdp1;
