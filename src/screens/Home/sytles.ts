import { FlatList, FlatListProps } from "react-native";
import styled, { css } from "styled-components/native";
import { TaskType } from ".";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`

export const Form = styled.View`
    flex-direction: row;
    gap: 4px;
    padding: 0 24px;
    transform: translateY(-22px);
`

export const Tasks = styled.View`
    margin-top: 16px;
    padding: 0 24px;
    flex-direction: row;
    justify-content: space-between;
`

export const TaskContainer = styled.View`
    flex-direction: row;
    gap: 8px;
    align-items: center;
`

export const TextCreated = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONTS.SIZES.NORMAL}px;
        color: ${theme.COLORS.BLUE};
        font-weight: ${theme.FONTS.WEIGHT.BOLD};
    `}
`

export const TextDone = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONTS.SIZES.NORMAL}px;
        color: ${theme.COLORS.PURPLE};
        font-weight: ${theme.FONTS.WEIGHT.BOLD};
    `}
`

export const Counter = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONTS.SIZES.SMALL}px;
        font-weight: ${theme.FONTS.WEIGHT.BOLD};
        color: ${theme.COLORS.GRAY_200};
        background-color: ${theme.COLORS.GRAY_400};
        padding: 4px 12px;
        border-radius: 32px;
    `}
`

export const TasksList = styled.FlatList.attrs({
    contentContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8
    }
}) <FlatListProps<TaskType>>`
    margin-top: 64px;
    padding: 0 24px;
`

