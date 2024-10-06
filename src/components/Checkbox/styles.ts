import styled, { css } from "styled-components/native"
import Entypo from '@expo/vector-icons/Entypo';
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import CheckboxOpacity from "./CheckboxOpacity";



export const Container = styled(CheckboxOpacity)`
    width: 24px;
    height: 24px;
    border-radius: 12px;
    align-items: center;
    justify-content: center;
    ${({ theme, checked }) => css`
        background-color: ${checked ? theme.COLORS.PURPLE_DARK : 'transparent'};
        border: ${!checked && `2px solid ${theme.COLORS.BLUE}`};
    `}
`

export const Icon = styled(Entypo).attrs(({ theme }) => ({
    size: 16,
    color: theme.COLORS.GRAY_100
}))``