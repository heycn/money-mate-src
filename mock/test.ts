import { MockMethod } from 'vite-plugin-mock'
export default [
  {
    url: '/api/v1/me',
    method: 'get',
    timeout: 500,
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
        resources: [],
        pager: {
          page: 1,
          per_page: 25,
          count: 0
        }
      }
    },
  },
] as MockMethod[]