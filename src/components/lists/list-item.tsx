import React from "react";

import styled from "@emotion/native";
import LinearGradient from "react-native-linear-gradient";
import { Text } from "react-native-paper";

const Container = styled.TouchableOpacity`
  background-color: rgba(102, 47, 165, 1);
  margin: 8px 16px;
  width: 223px;
  height: 160px;
  border-radius: 24px;
  overflow: hidden;
`;

const Background = styled.ImageBackground`
  flex: 1;
  justify-content: "center";
`;

const DataContainer = styled(LinearGradient)`
  margin-top: 80px;
  height: 80px;
  padding: 22px 16px 16px 16px;
`;

export interface ListItemProps {
  onPress: () => void;
  src: string;
  title: string;
  subtitle?: string;
}

const ListItem: React.FC<ListItemProps> = (props) => {
  const { onPress, src, title, subtitle } = props;

  return (
    <Container onPress={onPress}>
      <Background source={{ uri: src }} resizeMode="cover">
        <DataContainer colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.4)"]}>
          <Text variant="titleMedium" style={{ color: "white" }}>
            {title}
          </Text>
          {!!subtitle && (
            <Text variant="bodySmall" style={{ color: "white" }}>
              {subtitle}
            </Text>
          )}
        </DataContainer>
      </Background>
    </Container>
  );
};

export default ListItem;
