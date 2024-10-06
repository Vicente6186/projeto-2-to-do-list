import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
    height: 170px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_700};
    padding-top: 24px;
    align-items: center;
`