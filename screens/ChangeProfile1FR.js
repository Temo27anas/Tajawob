import * as React from "react";
import { Image, StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Inputs2 from "../components/Inputs2";
import { Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const ChangeProfile1FR = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.changeprofile1fr, styles.iconLayout]}>
      <View style={styles.retour}>
        <Pressable style={styles.arrowIcon} onPress={() => navigation.goBack()}>
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/arrowicon.png")}
          />
        </Pressable>
        <Pressable style={styles.retour1} onPress={() => navigation.goBack()}>
          <Text style={styles.retour2}>Retour</Text>
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
      <Inputs2 />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  bonjourAnasTypo: {
    color: Color.darkslategray,
    fontWeight: "700",
    textAlign: "left",
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
    fontWeight: "500",
    fontFamily: FontFamily.nunitoMedium,
    color: Color.crimson_200,
    width: 85,
    height: 31,
    textAlign: "left",
  },
  retour1: {
    marginLeft: 11,
  },
  retour: {
    alignSelf: "stretch",
    height: 85,
    flexDirection: "row",
    alignItems: "center",
  },
  changerLeProfile: {
    top: 0,
    left: 0,
    fontSize: FontSize.size_3xl,
    textTransform: "uppercase",
    fontFamily: FontFamily.nunitoBold,
    position: "absolute",
  },
  titleChild: {
    top: 41,
    left: 14,
    borderStyle: "solid",
    borderColor: "#e33b44",
    borderTopWidth: 4,
    width: 134,
    height: 4,
    position: "absolute",
  },
  title: {
    width: 313,
    height: 43,
  },
  bonjourAnas: {
    fontSize: FontSize.size_12xl,
    fontFamily: FontFamily.skModernistBold,
    width: 328,
    height: 32,
  },
  bonjourAnasWrapper: {
    width: 360,
    height: 254,
    paddingTop: Padding.p_12xs,
    paddingBottom: Padding.p_114xl,
    alignItems: "center",
  },
  changeprofile1fr: {
    backgroundColor: Color.whitesmoke,
    flex: 1,
    height: 900,
    paddingHorizontal: Padding.p_mini,
    paddingVertical: 0,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ChangeProfile1FR;
