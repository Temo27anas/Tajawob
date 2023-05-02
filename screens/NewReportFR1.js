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
import Progress from "../components/Progress";
import Mdp1 from "../components/Mdp1";
import Mdp2 from "../components/Mdp2";
import PriorityView from "../components/PriorityView";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const NewReportFR1 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.newreportfr1, styles.iconLayout]}>
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
      <Progress />
      <View style={styles.title}>
        <Text style={styles.dtailsSurLe}>Détails sur Le RaPPORT</Text>
        <View style={styles.titleChild} />
      </View>
      <Mdp1
        commentaire="Titre du rapport *"
        rectangle7Placeholder="Titre du rapport"
        propWidth="unset"
        propAlignSelf="stretch"
      />
      <Mdp2 />
      <PriorityView />
      <Text style={[styles.lesChampsAvec, styles.suivantFlexBox]}>
        Les champs avec ( * ) sont obligatoires
      </Text>
      <TouchableHighlight
        style={styles.suivantWrapper}
        underlayColor="#fff"
        activeOpacity={0.2}
        onPress={() => navigation.navigate("NewReport2FR")}
      >
        <Text style={[styles.suivant, styles.suivantFlexBox]}>Suivant</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  suivantFlexBox: {
    textAlign: "center",
    fontFamily: FontFamily.skModernistRegular,
    alignSelf: "stretch",
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
    flexDirection: "row",
    height: 31,
    alignSelf: "stretch",
    alignItems: "center",
  },
  dtailsSurLe: {
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
    height: 43,
    marginTop: 32,
    alignSelf: "stretch",
  },
  lesChampsAvec: {
    fontSize: FontSize.size_base,
    color: Color.crimson_100,
    marginTop: 32,
  },
  suivant: {
    fontSize: FontSize.size_5xl,
    color: Color.white,
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
  newreportfr1: {
    backgroundColor: Color.whitesmoke,
    flex: 1,
    paddingLeft: Padding.p_lg,
    paddingTop: Padding.p_base,
    paddingRight: Padding.p_smi,
    paddingBottom: Padding.p_base,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default NewReportFR1;
