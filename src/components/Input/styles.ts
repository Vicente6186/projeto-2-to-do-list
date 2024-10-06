import styled, { css } from "styled-components/native";

export const Container = styled.TextInput.attrs(({ theme }) => {
    return {
        placeholderTextColor: theme.COLORS.GRAY_300
    }
})`
   ${({ theme }) => css`
   background-color: ${theme.COLORS.GRAY_500};
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONTS.SIZES.NORMAL}px;
    height: 54px;
    padding: 0 16px;
    border-radius: 6px;
   `}
`