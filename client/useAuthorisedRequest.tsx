import { useAuth0 } from '@auth0/auth0-react'
import request, { Response } from 'superagent'

export async function useAuthorisedRequest(
  method: string,
  endpoint: string,
  body: string | undefined
) {
  const { getAccessTokenSilently } = useAuth0()

  return async () => {
    const token = await getAccessTokenSilently()

    let response

    switch (method) {
      case 'get':
        response = await request
          .get(endpoint)
          .set('Authorization', `Bearer ${token}`)
        break
      case 'post':
        response = await request
          .post(endpoint)
          .set('Authorization', `Bearer ${token}`)
          .send(body)
        break
      case 'patch':
        response = await request
          .patch(endpoint)
          .set('Authorization', `Bearer ${token}`)
          .send(body)
        break
      case 'delete':
        response = await request
          .delete(endpoint)
          .set('Authorization', `Bearer ${token}`)
          .send(body)
        break
      default:
        throw new Error(
          "Unknown Requst method. Should be 'get, post, patch, or delete'"
        )
    }
    return response
  }
}
