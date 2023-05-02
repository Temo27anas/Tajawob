import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  Image,
  TouchableOpacity,
} from "react-native";
import { Input as RNKTextInput } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const Inputs = () => {
  const [rectangleTextInput, setRectangleTextInput] = useState();
  const [rectangleTextInput1, setRectangleTextInput1] = useState();
  const [rectangleTextInput2, setRectangleTextInput2] = useState();
  const navigation = useNavigation();

  return (
    <View style={styles.inputs}>
      <View style={styles.email}>
        <Text style={[styles.prenom, styles.prenomTypo]}>Prenom</Text>
        <View style={styles.motdepassform}>
          <RNKTextInput
            style={styles.motdepassformChild}
            placeholder="Email"
            value={rectangleTextInput}
            onChangeText={setRectangleTextInput}
          />
          <Text style={[styles.motDePasse, styles.prenomTypo]}>
            Mot de passe
          </Text>
        </View>
      </View>
      <View style={styles.email1}>
        <Text style={[styles.numeroDeTelephone, styles.prenomTypo]}>Nom</Text>
        <View style={styles.motdepassform}>
          <RNKTextInput
            style={styles.motdepassformChild}
            placeholder="Email"
            value={rectangleTextInput1}
            onChangeText={setRectangleTextInput1}
          />
          <Text style={[styles.motDePasse, styles.prenomTypo]}>
            Mot de passe
          </Text>
        </View>
      </View>
      <View style={styles.email1}>
        <Text style={[styles.numeroDeTelephone, styles.prenomTypo]}>Ville</Text>
        <View style={styles.motdepassform}>
          <RNKTextInput
            style={styles.motdepassformChild}
            placeholder="Email"
            value={rectangleTextInput2}
            onChangeText={setRectangleTextInput2}
          />
          <Text style={[styles.motDePasse, styles.prenomTypo]}>
            Mot de passe
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.vectorParent}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("SuccessSignUpFR")}
      >
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require("../assets/rectangle-63.png")}
        />
        <Text style={[styles.sinscrire, styles.prenomTypo2]}>S’inscrire</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  prenomTypo: {
    textAlign: "left",
    fontSize: FontSize.size_lgi,
  },
  prenomTypo2: {
    fontFamily: FontFamily.nunitoMedium,
    fontWeight: "500",
  },
  prenom: {
    color: Color.darkslategray,
    textAlign: "left",
    fontSize: FontSize.size_lgi,
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
    width: 115,
    height: 31,
    display: "none",
    marginLeft: -299,
    fontFamily: FontFamily.nunitoMedium,
    fontWeight: "500",
    textAlign: "left",
    fontSize: FontSize.size_lgi,
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
    color: Color.darkslategray,
    textAlign: "left",
    fontSize: FontSize.size_lgi,
  },
  email1: {
    marginTop: 21,
  },
  frameChild: {
    top: 23,
    left: 27,
    borderRadius: Border.br_81xl,
    width: 219,
    height: 64,
    position: "absolute",
  },
  sinscrire: {
    top: 35,
    left: 87,
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

export default Inputs;
