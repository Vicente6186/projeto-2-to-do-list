import { Image } from "react-native";
import { Container } from "./styles";
import brand from '@assets/brand/brand.png'

export default function Header() {
    return (
        <Container>
            <Image source={brand} />
            
        </Container>
    );
}