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
  title: String;
  subtitle: String;
  imgSource: ImageSourcePropType;
};
const ServiceCard = ({ imgSource, title, subtitle }: Props) => {
  return (
    <GlassTile
      className="items-center flex flex-1 flex-col h-[200px] "
      style={{
        borderRadius: 20,
        borderColor: "white",
        borderBottomWidth: 2,
        borderLeftWidth: 2,
        padding: 0,
        paddingBottom: 10,
      }}
    >
      <View
        className=" bg-[#4585AD] w-full items-center flex-1 justify-center "
        style={{ borderTopLeftRadius: 20, borderTopRightRadius: 20 }}
      >
        <Image source={imgSource} />
      </View>
      <View className="gap-1 items-center ">
        <Text className="text-blue-400 font-bold text-2xl">{title}</Text>
        <Text className="text-white font-semibold text-xl ">{subtitle}</Text>
        <Text className="text-blue-300  text-xs ">More About</Text>
      </View>
    </GlassTile>
  );
};

export default ServiceCard;

const styles = StyleSheet.create({});
