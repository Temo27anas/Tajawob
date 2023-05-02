import * as React from "react";
import {
  Text,
  StyleSheet,
  Image,
  Pressable,
  TouchableHighlight,
  View,
} from "react-native";
import { FontFamily, Color, FontSize, Border, Padding } from "../GlobalStyles";

const FrameComponent7 = ({
  onFrameTouchableHighlightPress,
  onFrameTouchableHighlightPress1,
  onFrameTouchableHighlightPress2,
}) => {
  return (
    <View style={styles.resoluParent}>
      <Text style={[styles.resolu, styles.resoluTypo]}>RESOLU</Text>
      <Text style={styles.dechetsDeConstruction}>DECHETS DE CONSTRUCTION</Text>
      <Text style={[styles.descriptionLeContainer, styles.containerTypo1]}>
        <Text style={styles.resoluTypo}>{`Description :  `}</Text>
        <Text
          style={styles.lePropritaireDu}
        >{` Le propriétaire du projet a complètement refusé de nettoyer les lieux
après le lui avoir demandé, sous prétexte de moyens logistiques`}</Text>
      </Text>
      <Text style={[styles.catgorieHygineContainer, styles.containerTypo1]}>
        <Text style={styles.resoluTypo}>Catégorie :</Text>
        <Text style={styles.lePropritaireDu}> hygiène</Text>
      </Text>
      <Text style={[styles.adressePrsContainer, styles.containerTypo]}>
        <Text style={styles.resoluTypo}>Adresse :</Text>
        <Text
          style={styles.lePropritaireDu}
        >{`  près du magasin Tariq, centre-ville
`}</Text>
      </Text>
      <Text style={[styles.villeIfraneContainer, styles.containerTypo]}>
        <Text style={styles.resoluTypo}>Ville :</Text>
        <Text style={styles.lePropritaireDu}>{`  Ifrane
`}</Text>
      </Text>
      <Text style={[styles.villeIfraneContainer, styles.containerTypo]}>
        <Text style={styles.resoluTypo}>Date du rapport :</Text>
        <Text style={styles.lePropritaireDu}> 10/04/2022</Text>
      </Text>
      <Text style={[styles.descriptionLeContainer, styles.containerTypo1]}>
        <Text style={styles.resoluTypo}>{`Commentaire :  `}</Text>
        <Text
          style={styles.lePropritaireDu}
        >{` lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem 

`}</Text>
      </Text>
      <Image
        style={styles.constructionAndDemolitionWa}
        resizeMode="cover"
        source={require("../assets/construction-and-demolition-waste-0-21.png")}
      />
      <TouchableHighlight
        style={styles.wrapper}
        underlayColor="#fff"
        activeOpacity={0.2}
        onPress={onFrameTouchableHighlightPress}
      >
        <>
          <Text style={styles.modifier}>Modifier</Text>
          <Image
            style={[styles.icons8Commercial601, styles.icons8Position]}
            resizeMode="cover"
            source={require("../assets/icons8commercial60-11.png")}
          />
        </>
      </TouchableHighlight>
      <TouchableHighlight
        style={[styles.container, styles.frameLayout]}
        underlayColor="#fff"
        activeOpacity={0.2}
        onPress={onFrameTouchableHighlightPress1}
      >
        <>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/rectangle-61.png")}
          />
          <Text style={styles.modifier}>Modifier</Text>
          <Image
            style={[styles.icons8Edit481, styles.icons8Position]}
            resizeMode="cover"
            source={require("../assets/icons8edit48-1.png")}
          />
        </>
      </TouchableHighlight>
      <TouchableHighlight
        style={[styles.frame, styles.frameLayout]}
        underlayColor="#fff"
        activeOpacity={0.2}
        onPress={onFrameTouchableHighlightPress2}
      >
        <>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/rectangle-61.png")}
          />
          <Text style={styles.modifier}>Supprimer</Text>
          <Image
            style={styles.icons8Delete481}
            resizeMode="cover"
            source={require("../assets/icons8delete48-1.png")}
          />
        </>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  resoluTypo: {
    fontFamily: FontFamily.skModernistBold,
    fontWeight: "700",
  },
  containerTypo1: {
    color: Color.black,
    fontSize: FontSize.size_mini,
    marginTop: 6,
    textAlign: "left",
  },
  containerTypo: {
    width: 306,
    color: Color.black,
    fontSize: FontSize.size_mini,
    marginTop: 6,
    textAlign: "left",
  },
  icons8Position: {
    width: 40,
    left: 43,
    top: 8,
    position: "absolute",
  },
  frameLayout: {
    width: 324,
    marginTop: 6,
  },
  resolu: {
    fontSize: FontSize.size_2xl,
    color: Color.seagreen,
    textAlign: "right",
    width: 277,
    height: 33,
  },
  dechetsDeConstruction: {
    fontSize: FontSize.size_10xl,
    color: Color.darkslategray,
    width: 256,
    height: 75,
    marginTop: 6,
    textAlign: "left",
    fontFamily: FontFamily.skModernistRegular,
  },
  lePropritaireDu: {
    fontFamily: FontFamily.skModernistRegular,
  },
  descriptionLeContainer: {
    width: 307,
    height: 88,
  },
  catgorieHygineContainer: {
    width: 299,
    height: 26,
  },
  adressePrsContainer: {
    height: 26,
  },
  villeIfraneContainer: {
    height: 24,
  },
  constructionAndDemolitionWa: {
    width: 301,
    height: 185,
    marginTop: 6,
    borderRadius: Border.br_xl,
  },
  modifier: {
    top: 11,
    left: 157,
    fontSize: FontSize.size_5xl,
    fontWeight: "500",
    fontFamily: FontFamily.nunitoMedium,
    color: Color.white,
    position: "absolute",
    textAlign: "left",
  },
  icons8Commercial601: {
    height: 39,
  },
  wrapper: {
    width: 315,
    height: 56,
    marginTop: 6,
  },
  frameChild: {
    top: -1,
    left: -3,
    width: 323,
    height: 64,
    position: "absolute",
    borderRadius: Border.br_xl,
  },
  icons8Edit481: {
    height: 40,
  },
  container: {
    height: 56,
  },
  icons8Delete481: {
    width: 48,
    height: 48,
    left: 43,
    top: 8,
    position: "absolute",
  },
  frame: {
    height: 53,
  },
  resoluParent: {
    backgroundColor: Color.white,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    paddingLeft: Padding.p_6xs,
    paddingTop: Padding.p_8xs,
    paddingBottom: Padding.p_8xs,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 63,
    borderRadius: Border.br_xl,
  },
});

export default FrameComponent7;
