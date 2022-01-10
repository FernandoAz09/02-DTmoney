// ao criar contexto no react a gente consegue acessar o 
// contexto a partir de qualquer componente da aplicação
import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from './services/api'

interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

// interface TransactionInput {
//     title: string;
//     amount: number;
//     type: string;
//     category: string;
// }
// mesma coisa que o interface acima
//type TransactionInput = Pick<Transaction, 'title' | 'amount' | 'type' | 'category'> // Pick - seleciona os campos
type TransactionInput = Omit<Transaction, 'id' | 'createdAt'> // Omit - retirar os campos 

interface TransactionsProviderProps {
    children: ReactNode
}

interface TransactionsContextData {
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => void;
}

export const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
) // enganando o TS, pois valor nunca é utilizado, forçando um tipagem

export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([])


    useEffect(() => {
        api.get('transactions') //buscando dados 
            .then(response => setTransactions(response.data.transactions)) //salvando dados no estado
    }, [])

    function createTransaction(transaction: TransactionInput) {      
          api.post('/transactions', transaction)
    }

    return (
        <TransactionsContext.Provider value={{ transactions, createTransaction }}>
            { children }
        </TransactionsContext.Provider>
    )
}
