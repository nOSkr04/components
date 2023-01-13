/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import { Text as DefaultText,  StyleSheet } from "react-native";
import React from "react";

export type TextProps =  DefaultText["props"];

export function NuniBold(props: TextProps) {
  const { style, ...otherProps } = props;
  return <DefaultText {...otherProps} style={[style, styles.nuniBold]} />;
}

export function NuniRegular(props: TextProps) {
  const { style, ...otherProps } = props;
  return <DefaultText {...otherProps} style={[style, styles.nuniRegular]} />;
}

export function MonExtraBold(props: TextProps) {
  const { style, ...otherProps } = props;
  return <DefaultText {...otherProps} style={[style, styles.monExtraBold]} />;
}

export function MonBold(props: TextProps) {
  const { style, ...otherProps } = props;
  return <DefaultText {...otherProps} style={[style, styles.monBold]} />;
}

export function MonRegular(props: TextProps) {
  const { style, ...otherProps } = props;
  return <DefaultText {...otherProps} style={[style, styles.monRegular]} />;
}

export function MonThin(props: TextProps) {
  const { style, ...otherProps } = props;
  return <DefaultText {...otherProps} style={[style, styles.monThin]} />;
}

const styles = StyleSheet.create({
  monExtraBold: {
    fontFamily: "Montserrat-extrabold"
  },
  monBold: {
    fontFamily: "Montserrat-extrabold"
  },
  monRegular: {
    fontFamily: "Montserrat-extrabold"
  },
  monThin: {
    fontFamily: "Montserrat-extrabold"
  },
  nuniBold: {
    fontFamily: "Montserrat"
  },
  nuniRegular: {
    fontFamily: "a"
  }
});
