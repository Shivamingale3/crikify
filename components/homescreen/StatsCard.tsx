import React from "react";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";
import GlassTile from "../ui/GlassTile";

type Props = {
  count: String;
  iconName: ImageSourcePropType;
  statName: String;
};
const StatsCard = ({ count, iconName, statName }: Props) => {
  return (
    <GlassTile className="w-[31%] items-center gap-1 p-5">
      <View className="mb-2">
        <Image source={iconName} className="w-28 h-28 object-contain" />
      </View>
      <Text style={styles.statsCount}>{count}</Text>
      <Text style={{ color: "white", fontWeight: "500" }}>{statName}</Text>
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
