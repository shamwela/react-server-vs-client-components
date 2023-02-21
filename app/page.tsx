import { Users } from 'components/Users'
import { getUsers } from 'utilities/getUsers'

const DataFetchingServer = async () => {
  const { error, users } = await getUsers()

  if (error) {
    return <p>{error}</p>
  }
  if (!users) {
    return <p>No users!</p>
  }
  return (
    <main>
      <h1>React server component demo</h1>
      <Users users={users} />
    </main>
  )
}

export default DataFetchingServer
