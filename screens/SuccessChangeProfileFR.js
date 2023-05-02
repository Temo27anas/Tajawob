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

const SuccessChangeProfileFR = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.successchangeprofilefr}>
      <Image
        style={styles.successchangeprofilefrChild}
        resizeMode="cover"
        source={require("../assets/group-457.png")}
      />
      <Text style={styles.votreProfileA}>
        Votre profile a été enregistré avec succès
      </Text>
      <Text
        style={[styles.vousSerezRedirig, styles.allerLaTypo]}
      >{`vous serez redirigé vers la page principale
`}</Text>
      <TouchableHighlight
        style={styles.allerLaPagePrincipaleWrapper}
        underlayColor="#fff"
        activeOpacity={0.2}
        onPress={() => navigation.navigate("MainFR")}
      >
        <Text
          style={[styles.allerLa, styles.allerLaTypo]}
        >{`aller à la page principale
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
  successchangeprofilefrChild: {
    width: 185,
    height: 165,
  },
  votreProfileA: {
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
    height: 38,
    width: 288,
  },
  allerLaPagePrincipaleWrapper: {
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
  successchangeprofilefr: {
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

export default SuccessChangeProfileFR;
