import { Bridge } from '../../models/bridge.ts'
import { getBridgesApi } from '../api/bridge.ts'
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'

export default function BridgesList() {
  const {
    data: bridges,
    error,
    isLoading,
  } = useQuery({ queryKey: ['bridges'], queryFn: getBridgesApi })

  if (error) {
    return <p>Your bridges are gone! What a massive error</p>
  }
  if (!bridges || isLoading) {
    return <p>Fetching bridges from auckland...</p>
  }

  return (
    <>
      <h1>Bridge Toll Calculater</h1>

    <div>
      <ul>
        {bridges.map((bridge, index) => {
          return (
            <li key={index}>
              <Link to={`/bridge/${bridge.id}`}>{bridge.name}</Link>
            </li>
          )
        })}
      </ul>
      </div>
    </>
  )
}
