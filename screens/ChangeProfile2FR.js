import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Pressable,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { Input as RNKTextInput } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Padding, Border } from "../GlobalStyles";

const ChangeProfile2FR = () => {
  const [rectangleTextInput, setRectangleTextInput] = useState("Anas");
  const [rectangleTextInput1, setRectangleTextInput1] = useState("Anas");
  const [rectangleTextInput2, setRectangleTextInput2] = useState("Anas");
  const navigation = useNavigation();

  return (
    <View style={[styles.changeprofile2fr, styles.inputsFlexBox]}>
      <View style={[styles.retour, styles.retourFlexBox]}>
        <Pressable style={styles.arrowIcon} onPress={() => navigation.goBack()}>
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/arrowicon1.png")}
          />
        </Pressable>
        <Pressable style={styles.retour1} onPress={() => navigation.goBack()}>
          <Text style={[styles.retour2, styles.retour2Typo]}>Retour</Text>
        </Pressable>
      </View>
      <View style={styles.title}>
        <Text style={[styles.changerLeProfile, styles.bonjourAnasTypo]}>
          Changer le profile
        </Text>
        <View style={styles.titleChild} />
      </View>
      <View style={styles.bonjourAnasWrapper}>
        <Text style={[styles.bonjourAnas, styles.bonjourAnasTypo]}>
          Bonjour Anas!
        </Text>
      </View>
      <View style={[styles.inputs, styles.inputsFlexBox]}>
        <View style={styles.email}>
          <Text style={[styles.prenom, styles.prenomTypo]}>Prenom</Text>
          <View style={[styles.motdepassform, styles.retourFlexBox]}>
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
          <View style={[styles.motdepassform, styles.retourFlexBox]}>
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
          <Text style={[styles.numeroDeTelephone, styles.prenomTypo]}>
            Ville
          </Text>
          <View style={[styles.motdepassform, styles.retourFlexBox]}>
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
          onPress={() => navigation.navigate("SuccessChangeProfileFR")}
        >
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/rectangle-62.png")}
          />
          <Text style={[styles.valider, styles.prenomTypo1]}>Valider</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputsFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  retourFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  retour2Typo: {
    height: 31,
    fontFamily: FontFamily.nunitoMedium,
    fontWeight: "500",
  },
  bonjourAnasTypo: {
    fontWeight: "700",
    color: Color.darkslategray,
    textAlign: "left",
  },
  prenomTypo: {
    fontSize: FontSize.size_lgi,
    textAlign: "left",
  },
  prenomTypo1: {
    fontFamily: FontFamily.nunitoMedium,
    fontWeight: "500",
  },
  icon: {
    height: "100%",
  },
  arrowIcon: {
    width: 30,
    height: 30,
  },
  retour2: {
    fontSize: FontSize.size_4xl,
    color: Color.crimson_200,
    width: 85,
    textAlign: "left",
    height: 31,
  },
  retour1: {
    marginLeft: 11,
  },
  retour: {
    alignSelf: "stretch",
    height: 85,
  },
  changerLeProfile: {
    top: 0,
    left: 0,
    fontSize: FontSize.size_3xl,
    textTransform: "uppercase",
    fontFamily: FontFamily.nunitoBold,
    color: Color.darkslategray,
    position: "absolute",
  },
  titleChild: {
    top: 41,
    left: 14,
    borderColor: "#e33b44",
    borderTopWidth: 4,
    width: 134,
    height: 4,
    borderStyle: "solid",
    position: "absolute",
  },
  title: {
    width: 313,
    height: 43,
  },
  bonjourAnas: {
    fontSize: FontSize.size_12xl,
    fontFamily: FontFamily.skModernistBold,
    width: 329,
    height: 32,
    color: Color.darkslategray,
  },
  bonjourAnasWrapper: {
    width: 352,
    height: 237,
    paddingTop: Padding.p_12xs,
    paddingBottom: Padding.p_114xl,
    alignItems: "center",
  },
  prenom: {
    color: Color.darkslategray,
    fontFamily: FontFamily.nunitoMedium,
    fontWeight: "500",
  },
  motdepassformChild: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.gray_100,
    borderColor: "#032a3b",
    borderWidth: 1.5,
    width: 312,
    borderStyle: "solid",
  },
  motDePasse: {
    color: Color.gray_200,
    width: 115,
    display: "none",
    marginLeft: -299,
    height: 31,
    fontFamily: FontFamily.nunitoMedium,
    fontWeight: "500",
  },
  motdepassform: {
    paddingTop: Padding.p_21xl,
    justifyContent: "flex-end",
    marginTop: -27,
    height: 92,
  },
  email: {
    height: 92,
  },
  numeroDeTelephone: {
    fontFamily: FontFamily.skModernistRegular,
    color: Color.darkslategray,
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
  valider: {
    top: 35,
    left: 98,
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
    width: 312,
  },
  changeprofile2fr: {
    backgroundColor: Color.whitesmoke,
    flex: 1,
    height: 800,
    paddingHorizontal: Padding.p_mini,
    paddingVertical: 0,
    overflow: "hidden",
    width: "100%",
  },
});

export default ChangeProfile2FR;
