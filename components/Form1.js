import * as React from "react";
import { Text, StyleSheet, Pressable, Image, View } from "react-native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const Form1 = ({ onFramePressablePress, onRectanglePressablePress }) => {
  return (
    <View style={styles.form}>
      <Text style={[styles.image, styles.imageTypo]}>Image</Text>
      <Pressable
        style={[styles.rectangleParent, styles.frameChildLayout]}
        onPress={onFramePressablePress}
      >
        <Pressable
          style={[styles.frameChild, styles.frameChildLayout]}
          onPress={onRectanglePressablePress}
        />
        <View style={styles.formatsPrisEnChargeJpgParent}>
          <Text style={[styles.formatsPrisEn, styles.formatsPrisEnClr]}>
            Formats pris en charge : jpg, png
          </Text>
          <Text
            style={[styles.tailleMaximale, styles.formatsPrisEnClr]}
          >{`Taille maximale : 2 Mb
`}</Text>
          <Image
            style={styles.icons8Image6412}
            resizeMode="cover"
            source={require("../assets/icons8image64-1-2.png")}
          />
          <Text style={[styles.importezUnePhoto, styles.formatsPrisEnClr]}>
            Importez une photo ou prenez-la avec votre appareil photo
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  imageTypo: {
    textAlign: "left",
    fontFamily: FontFamily.skModernistRegular,
  },
  frameChildLayout: {
    height: 219,
    left: 0,
    position: "absolute",
    width: 273,
  },
  formatsPrisEnClr: {
    color: Color.crimson_200,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  image: {
    left: 5,
    fontSize: FontSize.size_lgi,
    color: Color.darkslategray,
    width: 62,
    top: 0,
    position: "absolute",
  },
  frameChild: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.gray_100,
    borderStyle: "dashed",
    borderColor: "#f42534",
    borderWidth: 1.5,
    top: 0,
  },
  formatsPrisEn: {
    top: 120,
    width: 219,
    height: 16,
    left: 0,
    color: Color.crimson_200,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    fontFamily: FontFamily.skModernistRegular,
  },
  tailleMaximale: {
    top: 146,
    left: 43,
    width: 151,
    height: 18,
    textAlign: "left",
    fontFamily: FontFamily.skModernistRegular,
  },
  icons8Image6412: {
    left: 78,
    width: 64,
    height: 64,
    top: 0,
    position: "absolute",
  },
  importezUnePhoto: {
    top: 70,
    left: 2,
    fontWeight: "700",
    fontFamily: FontFamily.skModernistBold,
    textAlign: "center",
    width: 222,
  },
  formatsPrisEnChargeJpgParent: {
    top: 25,
    left: 27,
    width: 224,
    height: 164,
    position: "absolute",
  },
  rectangleParent: {
    top: 43,
  },
  form: {
    height: 262,
    marginTop: 32,
    width: 273,
  },
});

export default Form1;
