import { Bridge } from '../../models/bridge.ts'
import { getBridges } from '../api/bridge.ts'
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'

export default function Bridges() {
  const {
    data: bridges,
    error,
    isLoading,
  } = useQuery({ queryKey: ['bridges'], queryFn: getBridges })

  if (error) {
    return <p>Your bridges are gone! What a massive error</p>
  }
  if (!bridges || isLoading) {
    return <p>Fetching bridges from auckland...</p>
  }

  return (
    <>
      <h1>Bridge Toll Calculater</h1>
      <ul>
        {bridges.map((br) => {
          return (
            <li>
              <Link to={`/bridge/${br.id}`}>{br.name}</Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}
