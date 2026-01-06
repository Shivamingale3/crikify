import React from "react";
import { StyleSheet, Text, View } from "react-native";
import GlassTile from "../ui/GlassTile";
import { IconSymbol } from "../ui/icon-symbol";

type Props = {
  count: String;
  iconName: String;
  statName: String;
};
const StatsCard = ({ count, iconName, statName }: Props) => {
  return (
    <GlassTile
      className="w-[31%] items-center gap-1 "
      style={{ paddingVertical: 10, paddingHorizontal: 15 }}
    >
      <View className="mb-2">
        <IconSymbol name="bolt" color="yellow" size={30} />
      </View>
      <Text style={styles.statsCount}>{count}</Text>
      <Text style={{ color: "white", fontWeight: "600" }}>{statName}</Text>
    </GlassTile>
  );
};

export default StatsCard;

const styles = StyleSheet.create({
  statsCount: {
    color: "white",
    fontWeight: "bold",
    fontSize: 25,
  },
});
