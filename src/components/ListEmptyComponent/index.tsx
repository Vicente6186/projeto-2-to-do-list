import { Container, Icon, TextBold, TextRegular } from "./styles";
import clipboard from '@assets/clipboard/clipboard.png'
export default function ListEmptyComponent() {
    return (
       <Container>
        <Icon source={clipboard} />
           <TextBold>Você ainda não tem tarefas cadastradas</TextBold>
           <TextRegular>Crie tarefas e organize seus itens a fazer</TextRegular>
       </Container>
    )
}