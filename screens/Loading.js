import React, { useState } from "react";
import { Image, StyleSheet, View, ActivityIndicator } from "react-native";
import { Padding, Color } from "../GlobalStyles";

const Loading = () => {
  const [frameActivityIndicatorAnimating, setFrameActivityIndicatorAnimating] =
    useState(true);

  return (
    <View style={styles.loading}>
      <View style={[styles.tajawobArfr2Wrapper, styles.loadingChildFlexBox]}>
        <Image
          style={styles.tajawobArfr2Icon}
          resizeMode="cover"
          source={require("../assets/tajawobarfr-2.png")}
        />
      </View>
      <ActivityIndicator
        style={[styles.loadingChild, styles.loadingChildFlexBox]}
        size="large"
        color="#f42534"
        animating={frameActivityIndicatorAnimating}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loadingChildFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  tajawobArfr2Icon: {
    width: 294,
    height: 97,
  },
  tajawobArfr2Wrapper: {
    paddingHorizontal: Padding.p_8xs,
    paddingVertical: Padding.p_3xs,
  },
  loadingChild: {
    alignSelf: "stretch",
    marginTop: 106,
  },
  loading: {
    backgroundColor: Color.whitesmoke,
    flex: 1,
    width: "100%",
    height: 809,
    overflow: "hidden",
    paddingHorizontal: 33,
    paddingTop: 221,
    paddingBottom: 232,
    alignItems: "center",
  },
});

export default Loading;
