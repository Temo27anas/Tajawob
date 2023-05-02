import * as React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableHighlight,
} from "react-native";
import FrameComponent5 from "../components/FrameComponent5";
import Form from "../components/Form";
import Mdp from "../components/Mdp";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border, Padding } from "../GlobalStyles";

const NewReport3FR = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.newreport3fr}>
      <View style={styles.vectorParent}>
        <Image
          style={styles.vectorIcon}
          resizeMode="cover"
          source={require("../assets/arrowicon1.png")}
        />
        <Text style={[styles.retour, styles.retourPosition]}>Retour</Text>
      </View>
      <FrameComponent5 />
      <View style={styles.title}>
        <Text style={[styles.dtailsSurLe, styles.retourPosition]}>
          Détails sur Le RaPPORT
        </Text>
        <View style={styles.titleChild} />
      </View>
      <Form />
      <Mdp />
      <TouchableHighlight
        style={styles.envoyezWrapper}
        underlayColor="#fff"
        activeOpacity={0.2}
        onPress={() => navigation.navigate("SuccessNewReportFR")}
      >
        <Text style={styles.envoyez}>Envoyez</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  retourPosition: {
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  vectorIcon: {
    top: 1,
    width: 30,
    height: 30,
    left: 0,
    position: "absolute",
  },
  retour: {
    left: 39,
    fontSize: FontSize.size_4xl,
    textTransform: "capitalize",
    color: Color.crimson_200,
    width: 91,
    fontFamily: FontFamily.skModernistRegular,
    height: 31,
  },
  vectorParent: {
    height: 31,
    width: 329,
  },
  dtailsSurLe: {
    fontSize: FontSize.size_3xl,
    textTransform: "uppercase",
    fontWeight: "700",
    fontFamily: FontFamily.nunitoBold,
    color: Color.darkslategray,
    left: 0,
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
    height: 43,
    marginTop: 32,
    width: 329,
  },
  envoyez: {
    fontSize: FontSize.size_5xl,
    color: Color.white,
    textAlign: "center",
    width: 211,
    fontFamily: FontFamily.skModernistRegular,
  },
  envoyezWrapper: {
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
    paddingLeft: Padding.p_45xl,
    paddingTop: Padding.p_2xs,
    paddingBottom: Padding.p_2xs,
    alignItems: "flex-end",
    width: 211,
    marginTop: 32,
  },
  newreport3fr: {
    backgroundColor: Color.whitesmoke,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_base,
    alignItems: "center",
  },
});

export default NewReport3FR;
