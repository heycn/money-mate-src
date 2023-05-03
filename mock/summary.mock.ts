import type { MockMethod } from 'vite-plugin-mock'

export const summaryMock: MockMethod[] = [{
  url: '/api/v1/items/summary',
  method: 'get',
  statusCode: 200,
  response: () => {
    return {
      groups: [
        { happen_at: '2023-05-12', tag: null, amount: 300 },
        { happen_at: '2023-05-13', tag: null, amount: 600 },
        { happen_at: '2023-05-14', tag: null, amount: 200 }
      ],
      total: 900
    }
  }
}]