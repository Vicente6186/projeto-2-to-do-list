import styled, { css } from "styled-components/native";
import EvilIcons from '@expo/vector-icons/EvilIcons';

export const Container = styled.View`
    ${({ theme }) => css`
    width: 100%;
    padding: 12px;
    flex-direction: row;
    align-items: center;
    gap: 16px;
    background-color: ${theme.COLORS.GRAY_500};
    border: 1px solid ${theme.COLORS.GRAY_400};
    border-radius: 8px;`}
`


export const Content = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_100};
        font-size: ${theme.FONTS.SIZES.NORMAL}px;
        font-weight: ${theme.FONTS.WEIGHT.BOLD};
        flex: 1;
    `}
`

export const TrashIcon = styled(EvilIcons).attrs(({ theme }) => ({
    size: 32,
    color: theme.COLORS.GRAY_300
}))``
