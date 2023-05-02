import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import GroupComponent from "../components/GroupComponent";
import { FontFamily, Border, FontSize, Color } from "../GlobalStyles";

const Main = () => {
  return (
    <View style={styles.main}>
      <Image
        style={[styles.mainChild, styles.mainChildPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={[styles.mapsicleMapIcon, styles.mainChildPosition]}
        resizeMode="cover"
        source={require("../assets/mapsicle-map.png")}
      />
      <Image
        style={[styles.mainItem, styles.mainChildLayout]}
        resizeMode="cover"
        source={require("../assets/group-3.png")}
      />
      <Image
        style={[styles.mainInner, styles.mainChildLayout]}
        resizeMode="cover"
        source={require("../assets/group-3.png")}
      />
      <Image
        style={[styles.groupIcon, styles.mainChildLayout]}
        resizeMode="cover"
        source={require("../assets/group-3.png")}
      />
      <Image
        style={[styles.mainChild1, styles.mainChildLayout]}
        resizeMode="cover"
        source={require("../assets/group-3.png")}
      />
      <Image
        style={[styles.mainChild2, styles.mainChildLayout]}
        resizeMode="cover"
        source={require("../assets/group-4.png")}
      />
      <Image
        style={styles.baslineIcon}
        resizeMode="cover"
        source={require("../assets/basline.png")}
      />
      <View style={styles.buttonar}>
        <View style={[styles.buttonarChild, styles.blockShadowBox]} />
        <Image
          style={styles.flagmoroccoIcon}
          resizeMode="cover"
          source={require("../assets/flagmorocco.png")}
        />
        <Text style={[styles.text, styles.textTypo3]}>ارسل بلاغا جديدا</Text>
        <Image
          style={styles.icons8Commercial601}
          resizeMode="cover"
          source={require("../assets/icons8commercial60-1.png")}
        />
      </View>
      <Text style={styles.text1}>بلاغات بهذه المنطقة</Text>
      <View style={[styles.box, styles.boxPosition]}>
        <View style={[styles.probboxes, styles.probboxesShadowBox]} />
        <Image
          style={[
            styles.constructionAndDemolitionWa,
            styles.constructionPosition,
          ]}
          resizeMode="cover"
          source={require("../assets/construction-and-demolition-waste-0-1.png")}
        />
        <Text style={[styles.text2, styles.textTypo2]}>{`قرب متجر طارق، وسط
 المدينة`}</Text>
        <Text style={[styles.text3, styles.textTypo1]}>مخلفات بنائية</Text>
        <Text style={[styles.text4, styles.textTypo]}>منذ ايام</Text>
        <Text style={[styles.text5, styles.textTypo]}>3</Text>
        <View style={[styles.probboxes1, styles.probboxesShadowBox]} />
      </View>
      <View style={[styles.box1, styles.boxPosition]}>
        <View style={[styles.probboxes2, styles.probboxesShadowBox]} />
        <Image
          style={[
            styles.constructionAndDemolitionWa1,
            styles.constructionPosition,
          ]}
          resizeMode="cover"
          source={require("../assets/construction-and-demolition-waste-0-11.png")}
        />
        <Text
          style={[styles.text6, styles.textTypo2]}
        >{`زنقة الحرية، وسط المدينة
`}</Text>
        <Text style={[styles.text7, styles.textTypo1]}>حفر طرقية</Text>
        <Text style={[styles.text4, styles.textTypo]}>منذ ايام</Text>
        <Text style={[styles.text5, styles.textTypo]}>5</Text>
        <View style={[styles.probboxes3, styles.probboxesShadowBox]} />
      </View>
      <GroupComponent />
      <View style={[styles.search, styles.blockLayout]}>
        <View style={[styles.block, styles.blockLayout]} />
        <Image
          style={[styles.searchIcon, styles.voiceLayout]}
          resizeMode="cover"
          source={require("../assets/searchicon.png")}
        />
        <View style={[styles.voice, styles.voiceLayout]} />
        <Text style={[styles.text10, styles.textTypo3]}>{`ابحث هنا...
`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainChildPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  mainChildLayout: {
    height: 20,
    width: 20,
    position: "absolute",
  },
  blockShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    left: 0,
    top: 0,
  },
  textTypo3: {
    textAlign: "left",
    fontFamily: FontFamily.simahRegular,
    position: "absolute",
  },
  boxPosition: {
    height: 206,
    top: 592,
    position: "absolute",
  },
  probboxesShadowBox: {
    height: 219,
    borderRadius: Border.br_xl,
    left: -12,
    top: -2,
    width: 191,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  constructionPosition: {
    height: 131,
    borderTopRightRadius: Border.br_xl,
    borderTopLeftRadius: Border.br_xl,
    left: -16,
    top: -2,
    position: "absolute",
  },
  textTypo2: {
    textAlign: "right",
    fontSize: FontSize.size_mini,
    top: 126,
    color: Color.darkslategray,
    textTransform: "uppercase",
    fontFamily: FontFamily.simahRegular,
    position: "absolute",
  },
  textTypo1: {
    fontSize: FontSize.size_8xl,
    textTransform: "uppercase",
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.simahRegular,
    position: "absolute",
  },
  textTypo: {
    color: Color.crimson_200,
    fontSize: FontSize.size_mini,
    textTransform: "uppercase",
    textAlign: "left",
    position: "absolute",
  },
  blockLayout: {
    width: 333,
    position: "absolute",
  },
  voiceLayout: {
    height: 24,
    width: 23,
    position: "absolute",
    overflow: "hidden",
  },
  mainChild: {
    width: 774,
    height: 578,
  },
  mapsicleMapIcon: {
    width: 360,
    height: 429,
  },
  mainItem: {
    top: 270,
    left: 292,
  },
  mainInner: {
    top: 196,
    left: 327,
  },
  groupIcon: {
    top: 378,
    left: 139,
  },
  mainChild1: {
    top: 131,
    left: 26,
  },
  mainChild2: {
    top: 268,
    left: 50,
  },
  baslineIcon: {
    left: 154,
    width: 54,
    height: 54,
    top: 184,
    position: "absolute",
    overflow: "hidden",
  },
  buttonarChild: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.crimson_200,
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    height: 56,
    width: 248,
    position: "absolute",
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
  text: {
    top: 5,
    left: 73,
    fontSize: FontSize.size_5xl,
    color: Color.white,
    textAlign: "left",
  },
  icons8Commercial601: {
    top: 8,
    width: 40,
    height: 39,
    left: 20,
    position: "absolute",
  },
  buttonar: {
    top: 459,
    left: 57,
    height: 56,
    width: 248,
    position: "absolute",
  },
  text1: {
    top: 529,
    left: 95,
    fontSize: FontSize.size_11xl,
    color: Color.darkslategray,
    textTransform: "uppercase",
    textAlign: "left",
    fontFamily: FontFamily.simahRegular,
    position: "absolute",
  },
  probboxes: {
    backgroundColor: Color.white,
    height: 219,
    borderRadius: Border.br_xl,
    left: -12,
    top: -2,
  },
  constructionAndDemolitionWa: {
    width: 199,
  },
  text2: {
    left: 41,
  },
  text3: {
    top: 59,
    left: 16,
  },
  text4: {
    left: 107,
    fontFamily: FontFamily.simahRegular,
    color: Color.crimson_200,
    top: 184,
  },
  text5: {
    top: 188,
    left: 130,
    fontWeight: "300",
    fontFamily: FontFamily.dMMonoLight,
  },
  probboxes1: {
    borderStyle: "solid",
    borderColor: "#032a3b",
    borderWidth: 2,
    height: 219,
    borderRadius: Border.br_xl,
    left: -12,
    top: -2,
  },
  box: {
    left: 25,
    width: 180,
  },
  probboxes2: {
    backgroundColor: Color.white,
    height: 219,
    borderRadius: Border.br_xl,
    left: -12,
    top: -2,
  },
  constructionAndDemolitionWa1: {
    width: 191,
    height: 131,
    borderTopRightRadius: Border.br_xl,
    borderTopLeftRadius: Border.br_xl,
    left: -16,
  },
  text6: {
    left: 20,
  },
  text7: {
    top: 60,
    left: 49,
  },
  probboxes3: {
    backgroundColor: "rgba(196, 196, 196, 0.21)",
    height: 219,
    borderRadius: Border.br_xl,
    left: -12,
    top: -2,
  },
  box1: {
    left: 235,
    backgroundColor: "rgba(0, 0, 0, 0.85)",
    width: 179,
  },
  block: {
    borderRadius: 16,
    backgroundColor: Color.darkslategray,
    shadowColor: "rgba(0, 122, 255, 0.07)",
    shadowRadius: 20,
    elevation: 20,
    height: 51,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    left: 0,
    top: 0,
    width: 333,
  },
  searchIcon: {
    top: 13,
    left: 16,
  },
  voice: {
    top: 11,
    left: 294,
  },
  text10: {
    left: 194,
    fontSize: FontSize.size_4xl,
    letterSpacing: 0,
    lineHeight: 22,
    color: "#979797",
    width: 112,
    height: 44,
    top: 13,
  },
  search: {
    top: 49,
    left: 14,
    height: 57,
  },
  main: {
    backgroundColor: Color.whitesmoke,
    flex: 1,
    width: "100%",
    height: 1330,
    overflow: "hidden",
  },
});

export default Main;
