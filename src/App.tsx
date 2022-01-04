import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import Modal from 'react-modal'
import { useState } from 'react'
import { GlobalStyle } from "./styles/global";
import { NewTransactionModal } from "./components/NewTransactionModal"

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
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} /> {/* repasse de função */}

      <Dashboard />
      
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle />
    </> /* fragment -> tag vazia do React || tipo uma div por volta */
  )
}