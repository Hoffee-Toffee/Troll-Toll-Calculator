export interface User {
  id: number
  email: string
  firstName: string
  lastName: string
  auth0Id: string
  activeBridgeId: number | null
}

export interface AuthUser {
  auth0_id: string
  email: string
  first_name: string
  last_name: string
}
