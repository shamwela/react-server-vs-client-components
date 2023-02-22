import { wait } from 'utilities/wait'
import ky from 'ky'
import type { User } from 'types/User'

export const getUsers = async () => {
  let error = ''
  let users: User[] = []

  // Wait 3 seconds to clearly demonstrate the loading states
  await wait(3)

  try {
    users = await ky.get('https://jsonplaceholder.typicode.com/users').json()
  } catch (e) {
    if (e instanceof Error) {
      error = e.message
    } else {
      error = 'Unknown error'
    }
  }
  return { users, error }
}
