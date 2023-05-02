import * as React from "react";
import {
  ScrollView,
  Image,
  StyleSheet,
  View,
  Pressable,
  TouchableHighlight,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Item from "../components/Item";
import FrameComponent8 from "../components/FrameComponent8";
import { Padding, Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const MainFR = () => {
  const navigation = useNavigation();

  return (
    <ScrollView
      style={styles.mainfr}
      contentContainerStyle={styles.mainFRScrollViewContent}
    >
      <View style={styles.mapsicleMapWrapper}>
        <Image
          style={styles.mapsicleMapIcon}
          resizeMode="cover"
          source={require("../assets/mapsicle-map1.png")}
        />
      </View>
      <View style={[styles.frameParent, styles.frameParentFlexBox]}>
        <TouchableHighlight
          style={styles.icons8Customer5011Wrapper}
          underlayColor="#fff"
          activeOpacity={0.2}
          onPress={() => navigation.navigate("ChangeProfile1FR")}
        >
          <Image
            style={styles.icons8Customer5011}
            resizeMode="cover"
            source={require("../assets/icons8customer50-1-1.png")}
          />
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.icons8WrapperSpaceBlock}
          underlayColor="#fff"
          activeOpacity={0.2}
          onPress={() => navigation.navigate("NewReportFR1")}
        >
          <Image
            style={styles.icons8Plus501}
            resizeMode="cover"
            source={require("../assets/icons8plus50-1.png")}
          />
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.icons8WrapperSpaceBlock}
          underlayColor="#fff"
          activeOpacity={0.2}
          onPress={() => navigation.navigate("HistoryFR")}
        >
          <Image
            style={styles.icons8Plus501}
            resizeMode="cover"
            source={require("../assets/icons8timemachine48-1.png")}
          />
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.icons8WrapperSpaceBlock}
          underlayColor="#fff"
          activeOpacity={0.2}
          onPress={() => navigation.navigate("LoginFR")}
        >
          <Image
            style={styles.icons8Plus501}
            resizeMode="cover"
            source={require("../assets/icons8logout48-1-1.png")}
          />
        </TouchableHighlight>
      </View>
      <View
        style={[
          styles.rapportsDansCetteRgionWrapper,
          styles.frameParentFlexBox,
        ]}
      >
        <Text style={styles.rapportsDansCette}>Rapports dans cette région</Text>
      </View>
      <ScrollView
        style={styles.itemParent}
        horizontal
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.frameScrollViewContent}
      >
        <Item />
        <Item propMarginLeft={30} />
        <Item propMarginLeft={30} />
      </ScrollView>
      <FrameComponent8 />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  frameScrollViewContent: {
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 0,
  },
  mainFRScrollViewContent: {
    flexDirection: "column",
  },
  frameParentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 12,
    alignSelf: "stretch",
  },
  mapsicleMapIcon: {
    position: "absolute",
    top: 0,
    left: 1,
    width: 386,
    height: 578,
  },
  mapsicleMapWrapper: {
    height: 578,
    alignSelf: "stretch",
  },
  icons8Customer5011: {
    height: 38,
    width: 35,
  },
  icons8Customer5011Wrapper: {
    paddingBottom: 5,
    paddingRight: Padding.p_29xl,
    paddingTop: Padding.p_smi,
    paddingLeft: Padding.p_2xl,
    height: 74,
    width: 74,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.crimson_200,
    borderRadius: Border.br_81xl,
    alignItems: "center",
    flexDirection: "row",
  },
  icons8Plus501: {
    height: 35,
    width: 35,
  },
  icons8WrapperSpaceBlock: {
    marginLeft: 23,
    paddingBottom: 5,
    paddingRight: Padding.p_29xl,
    paddingTop: Padding.p_smi,
    paddingLeft: Padding.p_2xl,
    height: 74,
    width: 74,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.crimson_200,
    borderRadius: Border.br_81xl,
    alignItems: "center",
    flexDirection: "row",
  },
  frameParent: {
    height: 136,
    marginTop: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  rapportsDansCette: {
    fontSize: FontSize.size_2xl,
    textTransform: "uppercase",
    fontWeight: "700",
    fontFamily: FontFamily.skModernistBold,
    color: Color.darkslategray,
    textAlign: "center",
    alignSelf: "stretch",
  },
  rapportsDansCetteRgionWrapper: {
    height: 48,
    marginTop: 12,
  },
  itemParent: {
    marginTop: 12,
    width: "100%",
  },
  mainfr: {
    backgroundColor: Color.whitesmoke,
    flex: 1,
    maxWidth: "100%",
    width: "100%",
  },
});

export default MainFR;
