import { User } from 'supporting/types'

export type UserState = {
  user: User | null
  isAuth: boolean
  setUser: (user: User) => void
  cleanUser: () => void
  getIsAuth: () => boolean
  setIsAuth: () => void
}
