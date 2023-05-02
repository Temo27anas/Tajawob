import * as React from "react";
import {
  Image,
  StyleSheet,
  Pressable,
  Text,
  View,
  TouchableHighlight,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import FrameComponent6 from "../components/FrameComponent6";
import Form1 from "../components/Form1";
import Mdp1 from "../components/Mdp1";
import { FontSize, Color, FontFamily, Border, Padding } from "../GlobalStyles";

const NewReport2FR = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.newreport2fr}>
      <View style={styles.vectorParent}>
        <Image
          style={styles.vectorIcon}
          resizeMode="cover"
          source={require("../assets/arrowicon1.png")}
        />
        <Pressable
          style={[styles.retour, styles.retourPosition]}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.retour1}>Retour</Text>
        </Pressable>
      </View>
      <FrameComponent6 />
      <View style={styles.title}>
        <Text style={[styles.dtailsSurLe, styles.retourPosition]}>
          Détails sur Le RaPPORT
        </Text>
        <View style={styles.titleChild} />
      </View>
      <Form1
        onFramePressablePress={() => navigation.toggleDrawer()}
        onRectanglePressablePress={() => navigation.toggleDrawer()}
      />
      <Mdp1
        commentaire="Commentaire"
        rectangle7Placeholder="Entrez votre commentaire ici..."
        propWidth={316}
        propAlignSelf="unset"
      />
      <TouchableHighlight
        style={styles.suivantWrapper}
        underlayColor="#fff"
        activeOpacity={0.2}
        onPress={() => navigation.navigate("NewReport3FR")}
      >
        <Text style={styles.suivant}>Suivant</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  retourPosition: {
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
  retour1: {
    fontSize: FontSize.size_4xl,
    color: Color.crimson_200,
    width: 85,
    textAlign: "left",
    fontFamily: FontFamily.skModernistRegular,
    height: 31,
  },
  retour: {
    left: 39,
  },
  vectorParent: {
    width: 329,
    height: 31,
  },
  dtailsSurLe: {
    fontSize: FontSize.size_3xl,
    textTransform: "uppercase",
    fontWeight: "700",
    fontFamily: FontFamily.nunitoBold,
    color: Color.darkslategray,
    textAlign: "left",
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
    width: 313,
    height: 43,
    marginTop: 32,
  },
  suivant: {
    alignSelf: "stretch",
    fontSize: FontSize.size_5xl,
    color: Color.white,
    textAlign: "center",
    fontFamily: FontFamily.skModernistRegular,
  },
  suivantWrapper: {
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
    width: 211,
    paddingHorizontal: Padding.p_45xl,
    paddingVertical: Padding.p_2xs,
    alignItems: "flex-end",
    marginTop: 32,
  },
  newreport2fr: {
    backgroundColor: Color.whitesmoke,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_base,
    alignItems: "center",
  },
});

export default NewReport2FR;
