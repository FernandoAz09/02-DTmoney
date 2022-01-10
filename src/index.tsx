import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs'
import { App } from './App';

//valor para API(fake) retornar
createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Santa Casa',
          type: 'deposit',
          category: 'Emprego',
          amount: 2300,
          createdAt: new Date(),
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Contas',
          amount: 1600,
          createdAt: new Date('2022-01-14 19:00:00'),
        }
      ],
    })
  },

  routes() {
    this.namespace = 'api' // dizendo para o miragejs que todas as chamadas que eu for fazer estarão a partir do endereço=api

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)