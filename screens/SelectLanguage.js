import * as React from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  Pressable,
  TouchableHighlight,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";

const SelectLanguage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.selectlanguage}>
      <View style={styles.tajawobArfr3Wrapper}>
        <Image
          style={styles.tajawobArfr3Icon}
          resizeMode="cover"
          source={require("../assets/tajawobarfr-3.png")}
        />
      </View>
      <View style={styles.chooselang}>
        <Text style={styles.text}>اختر اللغة</Text>
        <Text
          style={[styles.choisissezLaLangue, styles.text1FlexBox]}
        >{`Choisissez la langue `}</Text>
      </View>
      <View style={styles.buttonarParent}>
        <TouchableHighlight
          style={[styles.buttonar, styles.buttonarShadowBox]}
          underlayColor="#fff"
          activeOpacity={0.2}
          onPress={() => navigation.navigate("LoginFR")}
        >
          <>
            <Text style={[styles.text1, styles.text1FlexBox]}>عربي</Text>
            <Image
              style={styles.flagmoroccoIcon}
              resizeMode="cover"
              source={require("../assets/flagmorocco1.png")}
            />
          </>
        </TouchableHighlight>
        <TouchableHighlight
          style={[styles.buttonfr, styles.buttonarShadowBox]}
          underlayColor="#fff"
          activeOpacity={0.2}
          onPress={() => navigation.navigate("LoginFR")}
        >
          <>
            <Text style={[styles.franais, styles.text1FlexBox]}>Français</Text>
            <Image
              style={styles.flagfranceIcon}
              resizeMode="cover"
              source={require("../assets/flagfrance.png")}
            />
          </>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text1FlexBox: {
    textAlign: "center",
    color: Color.darkslategray,
  },
  buttonarShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_81xl,
    height: 56,
    width: 248,
  },
  tajawobArfr3Icon: {
    width: 294,
    height: 97,
  },
  tajawobArfr3Wrapper: {
    paddingVertical: 20,
    paddingHorizontal: 0,
  },
  text: {
    textAlign: "left",
    color: Color.darkslategray,
    fontFamily: FontFamily.simahRegular,
    fontSize: FontSize.size_5xl,
  },
  choisissezLaLangue: {
    fontSize: FontSize.size_2xl,
    fontWeight: "600",
    fontFamily: FontFamily.nunitoSemibold,
    marginTop: -9,
    textAlign: "center",
    width: 221,
  },
  chooselang: {
    height: 75,
    paddingVertical: Padding.p_mini,
    marginTop: 4,
    width: 221,
    alignItems: "center",
    paddingHorizontal: 0,
  },
  text1: {
    top: 2,
    left: 60,
    position: "absolute",
    fontFamily: FontFamily.simahRegular,
    textAlign: "center",
    fontSize: FontSize.size_5xl,
  },
  flagmoroccoIcon: {
    height: "100%",
    width: "22.58%",
    top: "0%",
    right: "10.48%",
    bottom: "0%",
    left: "66.94%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  buttonar: {
    backgroundColor: Color.white,
    alignSelf: "baseline",
    height: 56,
  },
  franais: {
    fontWeight: "500",
    fontFamily: FontFamily.nunitoMedium,
    fontSize: FontSize.size_5xl,
    textAlign: "center",
  },
  flagfranceIcon: {
    width: 56,
    marginLeft: 30,
    height: 56,
  },
  buttonfr: {
    backgroundColor: "#fbfafa",
    flexDirection: "row",
    paddingHorizontal: 26,
    paddingVertical: 0,
    justifyContent: "flex-end",
    marginTop: 30,
    height: 56,
    alignItems: "center",
  },
  buttonarParent: {
    height: 152,
    paddingTop: Padding.p_26xl,
    width: 248,
    marginTop: 4,
    alignItems: "center",
  },
  selectlanguage: {
    backgroundColor: Color.whitesmoke,
    flex: 1,
    width: "100%",
    height: 795,
    paddingVertical: Padding.p_lgi,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 0,
    overflow: "hidden",
  },
});

export default SelectLanguage;
