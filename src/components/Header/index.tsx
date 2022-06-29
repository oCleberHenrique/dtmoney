import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface HeaderProps {
    onOpenNewtransationModal: () => void;
}

export function Header({onOpenNewtransationModal}: HeaderProps) {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="Dt Money" />
                <button type='button' 
                onClick={onOpenNewtransationModal}>Nova Transação</button>
            </Content>
        </Container>
    )
}