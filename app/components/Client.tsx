'use client'
import { useState, useEffect } from 'react'
import { getUsers } from 'utilities/getUsers'
import type { User } from 'types/User'
import { Users } from 'components/Users'
import { Error } from './Error'

export const Client = () => {
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
    return <p>Loading users...</p>
  }
  if (error) {
    return <Error message={error} />
  }
  if (!users) {
    return <Error message='No users!' />
  }
  return (
    <main>
      <h1>React client component demo</h1>
      <Users users={users} />
    </main>
  )
}
