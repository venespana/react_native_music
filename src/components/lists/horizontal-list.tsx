import React from "react";

import { FlatList } from "react-native";

import styled from "@emotion/native";

import ListItem from "./list-item";

const IITEMS_MOCKS = new Array(5).fill({}).map((_, index) => ({
  id: index,
  title: `Item ${index}`,
  subtitle: `Subtitle ${index}`,
  image: `https://picsum.photos/300/300?random=${index}`,
}));

const Container = styled.View`
  height: 176px;
`;

const HorizontalList: React.FC = () => {
  return (
    <Container>
      <FlatList
        horizontal
        data={IITEMS_MOCKS}
        renderItem={({ item }: { item: any }) => (
          <ListItem
            onPress={() => console.log(item)}
            src={item.image}
            title={item.title}
            subtitle={item.subtitle}
          />
        )}
        keyExtractor={(item) => `${item.id}`}
      />
    </Container>
  );
};

export default HorizontalList;
