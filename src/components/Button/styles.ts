import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    width: 54px;
    height: 54px;
    background-color: ${({ theme }) => theme.COLORS.BLUE};
    border-radius: 6px;
    align-items: center;
    justify-content: center;
`