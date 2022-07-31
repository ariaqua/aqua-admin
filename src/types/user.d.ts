import { Role } from "./router"

export interface UserInfo {
  username: string
  token: string
  telephone: string
  place: string
  avatar: string
  githubAddress: string
  roles: Role[]
}
