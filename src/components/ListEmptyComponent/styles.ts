import styled, { css } from "styled-components/native";

export const Container = styled.View`
    align-items: center;
    justify-content: center;
`
export const Icon = styled.Image`
    width: 56px;
    height: 56px;
`

export const TextBold = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_300};
        font-size: ${theme.FONTS.SIZES.NORMAL}px;
        font-weight: ${theme.FONTS.WEIGHT.BOLD};
        margin-top: 16px;
        margin-bottom: 4px;
    `}
`

export const TextRegular = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_300};
        font-size: ${theme.FONTS.SIZES.NORMAL}px;
        font-weight: ${theme.FONTS.WEIGHT.REGULAR};
    `}
`