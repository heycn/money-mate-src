import { MockMethod } from 'vite-plugin-mock'
export default [
  {
    url: '/api/v1/me',
    method: 'get',
    timeout: 1000,
    response: (): Resource<User> => {
      return {
        resource: {
          id: 1,
          email: 'heycn@foxmail.com',
          updated_at: 'xxx',
          created_at: 'xxx'
        }
      }
    },
  },
  {
    url: '/api/v1/items',
    method: 'get',
    response: (): Resources<Item> => {
      return {
        resources: [{
          id: 1,
          user_id: 1,
          amount: 1000,
          note: 'note',
          tag_ids: [1, 2],
          happen_at: 'xxx',
          created_at: 'xxx',
          updated_at: 'xxx',
          kind: 'expenses'
        }],
        pager: {
          page: 1,
          per_page: 25,
          count: 100
        }
      }
    },
  },
] as MockMethod[]