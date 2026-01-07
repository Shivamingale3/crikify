import { Images } from "@/assets/Images";
import React from "react";
import { FlatList, StyleSheet } from "react-native";
import ServiceCard from "./ServiceCard";

const sampleData = [
  {
    imageSource: Images.homescreen.tournamentService,
    title: "Tournament",
    subtitle: "Add Tournament",
  },
  {
    imageSource: Images.homescreen.turfServivce,
    title: "Book Turf",
    subtitle: "View tournament",
  },
  {
    imageSource: Images.homescreen.turfServivce,
    title: "Book Turf",
    subtitle: "View tournament",
  },
  {
    imageSource: Images.homescreen.turfServivce,
    title: "Book Turf",
    subtitle: "View tournament",
  },
];
const ServiceGrid = () => {
  return (
    <FlatList
      data={sampleData}
      scrollEnabled={false}
      numColumns={2}
      columnWrapperStyle={{
        justifyContent: "space-between",
        gap: 20,
        marginBottom: 20,
      }}
      renderItem={({ item }) => (
        <ServiceCard
          imgSource={item.imageSource}
          subtitle={item.subtitle}
          title={item.title}
        />
      )}
    />
  );
};

export default ServiceGrid;

const styles = StyleSheet.create({});
