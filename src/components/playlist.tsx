import { View } from "react-native";

import { Text } from "react-native-paper";

import HorizontalList from "./lists/horizontal-list";

const Playlists: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text>Playlists</Text>
      <HorizontalList />
    </View>
  );
};

export default Playlists;
