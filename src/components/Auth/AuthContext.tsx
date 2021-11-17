import { createContext } from 'react'

export type User = {
  displayName: string
  email: string
  photo: string
  uid: string
}

type AuthContextValue = {
  user: null | User
}

const AuthContext = createContext<AuthContextValue>({
  user: null,
})

export default AuthContext
