import * as React from "react";
import { Image, StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import FrameComponent7 from "../components/FrameComponent7";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const HistoryFR = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.historyfr, styles.iconLayout]}>
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
        <Text style={styles.mesRapports}>Mes Rapports</Text>
        <View style={styles.titleChild} />
      </View>
      <FrameComponent7
        onFrameTouchableHighlightPress={() => navigation.navigate("Main")}
        onFrameTouchableHighlightPress1={() => navigation.navigate("Main")}
        onFrameTouchableHighlightPress2={() =>
          navigation.navigate("SuccessDeleteReportFR")
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
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
    textAlign: "left",
    height: 31,
  },
  retour1: {
    marginLeft: 11,
  },
  retour: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    height: 31,
  },
  mesRapports: {
    top: 0,
    left: 0,
    fontSize: FontSize.size_3xl,
    textTransform: "uppercase",
    fontWeight: "700",
    fontFamily: FontFamily.nunitoBold,
    color: Color.darkslategray,
    position: "absolute",
    textAlign: "left",
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
    marginTop: 63,
  },
  historyfr: {
    backgroundColor: Color.whitesmoke,
    flex: 1,
    paddingHorizontal: 28,
    paddingVertical: 39,
  },
});

export default HistoryFR;
