import { Container, Content, TrashIcon } from "./styles";
import { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { TaskContainer } from "@screens/Home/sytles";
import Checkbox from "@components/Checkbox";

type Props = {
    content: string
    checked: boolean
    onPressCheckbox: () => void
    onPressDestroy: () => void
}

export default function TaskItem({ content, checked, onPressCheckbox, onPressDestroy }: Props) {
    return (
        <Container>           
           <Checkbox checked={checked} onPress={onPressCheckbox}/>
            <Content>{content}</Content>
            <TouchableOpacity onPress={onPressDestroy}>
                <TrashIcon name='trash' />
            </TouchableOpacity>
        </Container>
    )
}