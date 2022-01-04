import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs'
import { App } from './App';

//valor para API(fake) retornar
createServer({
  routes() {
    this.namespace = 'api' // dizendo para o miragejs que todas as chamadas que eu for fazer estarão a partir do endereço=api

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Transaction 1',
          amount: 400,
          type: 'deposit',
          category: 'Food',
          createdAt: new Date()
        }
      ]
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)