import React from "react";

import { View } from "react-native";

import { Text } from "react-native-paper";

import HorizontalList from "~components/lists/horizontal-list";

const Explore: React.FC = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Explore Screen</Text>
      <HorizontalList />
    </View>
  );
};

export default Explore;
