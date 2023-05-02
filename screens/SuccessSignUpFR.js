import * as React from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  Pressable,
  TouchableHighlight,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const SuccessSignUpFR = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.successsignupfr}>
      <Image
        style={styles.successsignupfrChild}
        resizeMode="cover"
        source={require("../assets/group-457.png")}
      />
      <Text style={styles.votreCompteA}>
        Votre compte a été enregistré avec succès
      </Text>
      <Text
        style={[styles.vousSerezRedirig, styles.allerLaTypo]}
      >{`vous serez redirigé pour vous connecter
`}</Text>
      <TouchableHighlight
        style={styles.allerLaPageDeConnexionWrapper}
        underlayColor="#fff"
        activeOpacity={0.2}
        onPress={() => navigation.navigate("LoginFR")}
      >
        <Text
          style={[styles.allerLa, styles.allerLaTypo]}
        >{`aller à la page de connexion
`}</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  allerLaTypo: {
    fontFamily: FontFamily.skModernistRegular,
    fontSize: FontSize.size_5xl,
    textAlign: "center",
  },
  successsignupfrChild: {
    width: 185,
    height: 165,
  },
  votreCompteA: {
    fontSize: FontSize.size_8xl,
    fontWeight: "700",
    fontFamily: FontFamily.skModernistBold,
    width: 312,
    height: 77,
    marginTop: 44,
    textAlign: "center",
    color: Color.darkslategray,
  },
  vousSerezRedirig: {
    width: 302,
    marginTop: 44,
    color: Color.darkslategray,
    fontSize: FontSize.size_5xl,
  },
  allerLa: {
    color: Color.white,
    height: 56,
    width: 288,
  },
  allerLaPageDeConnexionWrapper: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.crimson_200,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    height: 85,
    paddingTop: Padding.p_mini,
    paddingBottom: Padding.p_sm,
    width: 288,
    marginTop: 44,
    justifyContent: "center",
  },
  successsignupfr: {
    backgroundColor: Color.whitesmoke,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    paddingHorizontal: Padding.p_4xl,
    paddingVertical: Padding.p_118xl,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SuccessSignUpFR;
