import { getUsers } from 'utilities/getUsers'
import { Error } from './Error'
import { Users } from './Users'

// Typed "any" because it is not fixed yet
// https://github.com/vercel/next.js/issues/43537
export const Server: any = async () => {
  const { error, users } = await getUsers()

  if (error) {
    return <Error message={error} />
  }
  if (!users) {
    return <Error message='No users!' />
  }
  return (
    <main>
      <h1>React server component demo</h1>
      <Users users={users} />
    </main>
  )
}
