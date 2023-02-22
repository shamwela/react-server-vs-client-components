'use client'
import { useState, useEffect } from 'react'
import { getUsers } from 'utilities/getUsers'
import type { User } from 'types/User'
import { Users } from 'components/Users'
import { Error as ErrorComponent } from './Error'

const useUsers = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    const fetchUsers = async () => {
      let users: User[] = []
      try {
        users = await getUsers()
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message)
        } else {
          setError('Unknown error')
        }
      }

      setUsers(users)
      setIsLoading(false)
    }
    fetchUsers()
  }, [])

  return { isLoading, error, users }
}

export const Client = () => {
  const { isLoading, error, users } = useUsers()
  if (isLoading) {
    return <p>Loading the client component...</p>
  }
  if (error) {
    return <ErrorComponent message={error} />
  }
  return (
    <main>
      <h1>React client component demo</h1>
      <Users users={users} />
    </main>
  )
}
