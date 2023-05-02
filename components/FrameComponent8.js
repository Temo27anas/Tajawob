import * as React from "react";
import { StyleSheet, View } from "react-native";
import FrameComponent41 from "./FrameComponent41";
import { Padding } from "../GlobalStyles";

const FrameComponent8 = () => {
  return (
    <View style={styles.mainfrInner}>
      <FrameComponent41 />
    </View>
  );
};

const styles = StyleSheet.create({
  mainfrInner: {
    flexDirection: "row",
    paddingHorizontal: Padding.p_22xl,
    paddingVertical: 0,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 12,
  },
});

export default FrameComponent8;
