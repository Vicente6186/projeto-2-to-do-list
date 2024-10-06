import { TouchableOpacityProps } from "react-native";
import { Container } from "./styles";
import { AntDesign} from '@expo/vector-icons'

type Props = TouchableOpacityProps & {
    variant?: 'STORE'
}

export default function Button({ variant = 'STORE', ...rest }: Props) {
    return (
        <Container {...rest}>
            {variant === 'STORE' && <AntDesign name="pluscircleo" size={24} color="white" />}
        </Container>
    )
}