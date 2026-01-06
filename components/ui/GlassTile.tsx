import React from "react";
import { View } from "react-native";

const GlassTile = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <View
      style={{
        borderRadius: 20,
        padding: 20,
        backgroundColor: "rgba(255, 255, 255, 0.1)",
      }}
      className={className}
    >
      {children}
    </View>
  );
};

export default GlassTile;
