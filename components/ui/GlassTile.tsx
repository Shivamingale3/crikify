import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";

const GlassTile = ({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: StyleProp<ViewStyle>;
}) => {
  return (
    <View style={[styles.container, style]} className={className}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    padding: 20,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
});

export default GlassTile;
