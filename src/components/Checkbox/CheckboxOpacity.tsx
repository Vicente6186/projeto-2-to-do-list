import { TouchableOpacity, TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
    checked: boolean
}

export default function CheckboxOpacity({checked, ...rest}: Props) {
    return <TouchableOpacity {...rest}/>
}