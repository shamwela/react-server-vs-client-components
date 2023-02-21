import { useState, useEffect } from 'react'
import { getUsers } from 'utilities/getUsers'
import type { User } from 'types/User'
import { Users } from 'components/Users'

const DataFetchingClient = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    const fetchUsers = async () => {
      const { error, users } = await getUsers()
      setError(error)
      setUsers(users)
      setIsLoading(false)
    }
    fetchUsers()
  }, [])

  if (isLoading) {
    return <p>Loading...</p>
  }
  if (error) {
    return <p>{error}</p>
  }
  if (!users) {
    return <p>No users!</p>
  }
  return (
    <main>
      <h1>React client component demo</h1>
      <Users users={users} />
    </main>
  )
}

export default DataFetchingClient
