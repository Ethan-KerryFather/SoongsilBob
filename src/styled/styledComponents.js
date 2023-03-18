// styled-components를 활용한 전역 스타일드 컴포넌트 관리ㅋ

import styled from "styled-components";
import { RFPercentage } from "react-native-responsive-fontsize";
import { Text } from "react-native";

export const BigTitle = styled(Text)`
  font-family: "gowun-bold";
  font-size: ${RFPercentage(3.5)}px;
  text-align: center;
`;

export const SmallTitle = styled(Text)`
  font-family: "gowun-bold";
  font-size: ${RFPercentage(2.3)}px;
  text-align: center;
`;

export const SmallSmallTitle = styled(Text)`
  font-family: "gowun-bold";
  font-size: ${RFPercentage(1.6)}px;
  text-align: center;
`;

export const NormalText = styled(Text)`
  font-family: "gowun-regular";
  font-size: ${RFPercentage(2)}px;
`;

export const SmallText = styled(Text)`
  font-family: "gowun-regular";
  font-size: ${RFPercentage(1.6)}px;
`;

export const SmallSmallText = styled(Text)`
  font-family: "gowun-regular";
  font-size: ${RFPercentage(1.3)}px;
`;
