import * as React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableHighlight,
} from "react-native";
import FrameComponent11 from "../components/FrameComponent11";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const LoginFR = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.loginfr}>
      <Image
        style={styles.loginfrChild}
        resizeMode="cover"
        source={require("../assets/frame-471.png")}
      />
      <View style={styles.bienvenueWrapper}>
        <Text style={styles.bienvenue}>Bienvenue!</Text>
      </View>
      <FrameComponent11 />
      <TouchableHighlight
        style={styles.wrapper}
        underlayColor="#fff"
        activeOpacity={0.2}
        onPress={() => navigation.navigate("MainFR")}
      >
        <>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/rectangle-64.png")}
          />
          <Text style={styles.connexion}>Connexion</Text>
        </>
      </TouchableHighlight>
      <Pressable style={styles.vounavez}>
        <Text
          style={[styles.vousNavezPas, styles.sinscrire1Typo]}
        >{`Vous n'avez pas de compte ? `}</Text>
        <TouchableHighlight
          style={styles.sinscrire}
          underlayColor="#fff"
          activeOpacity={0.2}
          onPress={() => navigation.navigate("SignupFR")}
        >
          <Text style={[styles.sinscrire1, styles.sinscrire1Typo]}>
            S'inscrire
          </Text>
        </TouchableHighlight>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  sinscrire1Typo: {
    fontSize: FontSize.size_lgi,
    fontFamily: FontFamily.nunitoMedium,
    fontWeight: "500",
    textAlign: "left",
  },
  loginfrChild: {
    width: 201,
    height: 67,
  },
  bienvenue: {
    fontSize: FontSize.size_12xl,
    fontWeight: "700",
    fontFamily: FontFamily.nunitoBold,
    textAlign: "left",
    color: Color.darkslategray,
    width: 164,
  },
  bienvenueWrapper: {
    marginTop: 49,
    width: 164,
    justifyContent: "center",
    alignItems: "center",
  },
  frameChild: {
    top: 0,
    left: -4,
    borderRadius: Border.br_81xl,
    width: 219,
    height: 64,
    position: "absolute",
  },
  connexion: {
    top: 14,
    left: 49,
    fontSize: FontSize.size_5xl,
    color: Color.white,
    fontFamily: FontFamily.nunitoMedium,
    fontWeight: "500",
    position: "absolute",
    textAlign: "left",
  },
  wrapper: {
    width: 211,
    height: 56,
    marginTop: 49,
  },
  vousNavezPas: {
    width: 296,
    color: Color.darkslategray,
    fontSize: FontSize.size_lgi,
  },
  sinscrire1: {
    color: Color.crimson_200,
    width: 80,
  },
  sinscrire: {
    marginLeft: -46,
  },
  vounavez: {
    width: 330,
    height: 23,
    flexDirection: "row",
    marginTop: 49,
  },
  loginfr: {
    backgroundColor: Color.whitesmoke,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_26xl,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LoginFR;
