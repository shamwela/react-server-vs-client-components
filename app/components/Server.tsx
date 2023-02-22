import { getUsers } from 'utilities/getUsers'
import { Users } from './Users'

// Typed "any" because it is not fixed yet
// https://github.com/vercel/next.js/issues/43537
export const Server: any = async () => {
  const users = await getUsers()
  // loading.tsx and error.tsx handle the loading and error states

  return (
    <main>
      <h1>React server component demo</h1>
      <Users users={users} />
    </main>
  )
}
