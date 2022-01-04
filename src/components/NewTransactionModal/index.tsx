import Modal from 'react-modal'
import { Container } from './styles'

interface NewTransitionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransitionModalProps) {
    return (
        <Modal 
        isOpen={isOpen} 
        onRequestClose={onRequestClose}
        overlayClassName={"react-modal-overlay"}
        className={"react-modal-content"}
      >
        <Container>
          <h2>Cadastrar transação</h2>
          <input 
            placeholder="Título" 
          />
          <input 
            type="number"
            placeholder="valor" 
          />
          <input 
            placeholder="valor"
          />
          <button type="submit">Cadastrar</button>
        </Container>
          
      </Modal>

    )
}