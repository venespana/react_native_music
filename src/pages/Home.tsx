import React from "react";

import { View } from "react-native";

import Playlists from "~components/playlist";

const Home: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      <Playlists />
    </View>
  );
};

export default Home;
