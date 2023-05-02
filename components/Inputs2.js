import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import { Input as RNKTextInput } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border, Padding } from "../GlobalStyles";

const Inputs2 = () => {
  const [rectangleTextInput, setRectangleTextInput] = useState("Anas");
  const [rectangleTextInput1, setRectangleTextInput1] = useState("Anas");
  const [rectangleTextInput2, setRectangleTextInput2] = useState("Anas");
  const [rectangleTextInput3, setRectangleTextInput3] = useState("Anas");
  const navigation = useNavigation();

  return (
    <View style={styles.inputs}>
      <View style={styles.email}>
        <Text style={[styles.email1, styles.email1Typo]}>Email</Text>
        <View style={styles.motdepassform}>
          <RNKTextInput
            style={styles.motdepassformChild}
            placeholder="Email"
            value={rectangleTextInput}
            onChangeText={setRectangleTextInput}
          />
          <Text style={[styles.motDePasse, styles.motTypo]}>Mot de passe</Text>
        </View>
      </View>
      <View style={styles.email2}>
        <Text style={[styles.numeroDeTelephone, styles.email1Typo]}>
          Numero de telephone
        </Text>
        <View style={styles.motdepassform}>
          <RNKTextInput
            style={styles.motdepassformChild}
            placeholder="Email"
            value={rectangleTextInput1}
            onChangeText={setRectangleTextInput1}
          />
          <Text style={[styles.motDePasse, styles.motTypo]}>Mot de passe</Text>
        </View>
      </View>
      <View style={styles.email2}>
        <Text style={[styles.numeroDeTelephone, styles.email1Typo]}>CIN</Text>
        <View style={styles.motdepassform}>
          <RNKTextInput
            style={styles.motdepassformChild}
            placeholder="Email"
            value={rectangleTextInput2}
            onChangeText={setRectangleTextInput2}
          />
          <Text style={[styles.motDePasse, styles.motTypo]}>Mot de passe</Text>
        </View>
      </View>
      <View style={styles.email2}>
        <Text style={[styles.motDePass, styles.motTypo]}>Mot de passe</Text>
        <View style={styles.motdepassform}>
          <RNKTextInput
            style={styles.motdepassformChild}
            placeholder="Password"
            value={rectangleTextInput3}
            onChangeText={setRectangleTextInput3}
          />
          <Text style={[styles.motDePasse, styles.motTypo]}>Mot de passe</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.vectorParent}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("ChangeProfile2FR")}
      >
        <TouchableHighlight
          style={styles.wrapper}
          underlayColor="#fff"
          activeOpacity={0.2}
          onPress={() => navigation.navigate("ChangeProfile2FR")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/rectangle-62.png")}
          />
        </TouchableHighlight>
        <Text style={[styles.suivant, styles.email1Typo1]}>{`Suivant >`}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  email1Typo: {
    textAlign: "left",
    fontSize: FontSize.size_lgi,
    color: Color.darkslategray,
  },
  motTypo: {
    width: 115,
    textAlign: "left",
    fontFamily: FontFamily.nunitoMedium,
    fontWeight: "500",
    fontSize: FontSize.size_lgi,
  },
  email1Typo1: {
    fontFamily: FontFamily.nunitoMedium,
    fontWeight: "500",
  },
  email1: {
    fontFamily: FontFamily.nunitoMedium,
    fontWeight: "500",
  },
  motdepassformChild: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.gray_100,
    borderStyle: "solid",
    borderColor: "#032a3b",
    borderWidth: 1.5,
    width: 312,
  },
  motDePasse: {
    color: Color.gray_200,
    height: 31,
    display: "none",
    marginLeft: -299,
  },
  motdepassform: {
    flexDirection: "row",
    paddingTop: Padding.p_21xl,
    justifyContent: "flex-end",
    marginTop: -27,
    height: 92,
    alignItems: "center",
  },
  email: {
    height: 92,
  },
  numeroDeTelephone: {
    fontFamily: FontFamily.skModernistRegular,
  },
  email2: {
    marginTop: 21,
  },
  motDePass: {
    color: Color.darkslategray,
    width: 115,
  },
  icon: {
    borderRadius: Border.br_81xl,
    width: "100%",
    height: "100%",
  },
  wrapper: {
    left: 27,
    top: 23,
    width: 219,
    height: 64,
    position: "absolute",
  },
  suivant: {
    top: 35,
    left: 85,
    fontSize: FontSize.size_5xl,
    color: Color.white,
    textAlign: "center",
    position: "absolute",
  },
  vectorParent: {
    width: 273,
    height: 321,
    marginTop: 21,
  },
  inputs: {
    height: 406,
    paddingBottom: Padding.p_4xs,
    justifyContent: "center",
    alignItems: "center",
    width: 312,
  },
});

export default Inputs2;
