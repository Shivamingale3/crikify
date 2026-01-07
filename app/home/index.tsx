import React from "react";
import { ScrollView, View } from "react-native";

import GreetingCard from "@/components/homescreen/GreetingCard";
import Header from "@/components/homescreen/Header";
import NewsContainer from "@/components/homescreen/NewsContainer";
import ServiceGrid from "@/components/homescreen/ServiceGrid";
import StatsGrid from "@/components/homescreen/StatsGrid";
import RootLayout from "@/components/ui/RootLayout";

const HomeScreen = () => {
  return (
    <RootLayout>
      <Header />
      <ScrollView>
        <View className="px-2 mt-5 gap-3">
          <GreetingCard />
          
          <NewsContainer />
          <StatsGrid />
          <ServiceGrid />
        </View>
      </ScrollView>
    </RootLayout>
  );
};

export default HomeScreen;

// For combining multiple glass elements
// function MergingGlassElements() {
//   return (
//     <LiquidGlassContainerView spacing={20}>
//       <LiquidGlassView style={{ width: 100, height: 100, borderRadius: 50 }} />
//       <LiquidGlassView style={{ width: 100, height: 100, borderRadius: 50 }} />
//     </LiquidGlassContainerView>
//   );
// }
