import { wait } from 'utilities/wait'
import ky from 'ky'
import type { User } from 'types/User'

export const getUsers = async () => {
  // Wait 3 seconds to clearly demonstrate the loading states
  await wait(3)

  // Try throwing an error
  // throw new Error('Server failed!')

  const users: User[] = await ky
    .get('https://jsonplaceholder.typicode.com/users')
    .json()
  return users
}
