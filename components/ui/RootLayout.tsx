import React from "react";
import { View } from "react-native";
import SvgGradientBg from "../homescreen/GradientBg";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "transparent" }}>
      <SvgGradientBg />
      {children}
    </View>
  );
};

export default RootLayout;
