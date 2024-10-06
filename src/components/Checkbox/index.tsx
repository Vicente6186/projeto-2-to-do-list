import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Container, Icon, } from "./styles";
import { useState } from "react";

type Props = TouchableOpacityProps & {
    checked: boolean
}

export default function Checkbox(props: Props) {
   return <Container {...props}>
            <Icon name="check" />
        </Container>
}


