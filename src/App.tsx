import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import Modal from 'react-modal'
import { useState } from 'react'
import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  function handleOpenNewTransactionModal() { // sempre que tiver handle ... interação do usuário
      setIsNewTransactionModalOpen(true)
  }
  function handleCloseNewTransactionModal() {
      setIsNewTransactionModalOpen(false)
  }

  return (
    <> 
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>

      <Dashboard />
      
      <Modal 
        isOpen={isNewTransactionModalOpen} 
        onRequestClose={handleCloseNewTransactionModal}
      >
        <h2>Cadastrar transação</h2>
      </Modal>

      <GlobalStyle />
    </> /* fragment -> tag vazia do React  */
  )
}