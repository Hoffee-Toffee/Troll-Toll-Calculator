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
      <div>
        <h1 id="bridgeTitle">Bridge Locations</h1>
        <ul id="bridgeList">
          {bridges.map((bridge, index) => {
            return (
              <li key={index}>
                <div className="bridgeBox">
                  <div>
                    <img
                      className="bridgeimages"
                      src={bridge.image_url}
                      alt="bridge"
                    />
                  </div>
                  <button className="linkButton">
                    <Link to={`/bridge/${bridge.id}`}>{bridge.name}</Link>
                  </button>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}
