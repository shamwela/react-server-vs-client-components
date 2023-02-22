import type { User } from 'types/User'

export const Users = ({ users }: { users: User[] }) => {
  return (
    <>
      {users.map(({ id, name }) => (
        <p key={id}>{name}</p>
      ))}
    </>
  )
}
