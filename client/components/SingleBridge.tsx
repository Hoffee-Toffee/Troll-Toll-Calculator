import request from 'superagent'
import { Bridge } from '../../models/bridge.ts'
import { getSingleBridgeApi } from '../api/bridge.ts'
import { useQuery } from '@tanstack/react-query'
import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'

export default function SingleBridge() {
  const { id } = useParams()

  const [estimate, setEstimate] = useState(0)

  const {
    data: bridge,
    isError,
    isLoading,
  }: {
    data: Bridge | undefined
    isError: boolean
    isLoading: boolean
  } = useQuery({
    queryKey: ['bridges', id],
    queryFn: () => getSingleBridgeApi(Number(id)),
  })

  if (isError) {
    return <p>Your bridges are gone! What a massive error</p>
  }
  if (!bridge || isLoading) {
    return <p>Fetching bridges from auckland...</p>
  }

  async function EstimateTollChange() {
    console.log('making req')

    request
      .get(`/api/v1/maps/${id}`)
      .then((result) => {
        console.log(result)

        setEstimate(result.body.estimate)
      })
      .catch((err) => {
        throw err
      })
  }

  EstimateTollChange()

  return (
    <>
      <h1 id="single-bridge-title">{bridge.name}</h1>

      <div className="single-bridge-container">
        <div className="single-bridge-left-div">
          <img src={bridge.imageUrl} alt={bridge.name}></img>
        </div>
        <div className="right-bridge-right-div">
          <p>
            <strong>Type:</strong> {bridge.type}
          </p>
          <p>
            <strong>Lanes:</strong> {bridge.lanes || 'Unknown'}
          </p>
          <p>
            <strong>Length:</strong> {bridge.lengthMeters}
          </p>
          <p>
            <strong>Location:</strong> {bridge.location}
          </p>
          <p>
            <strong>Type:</strong> {bridge.type}
          </p>
          <p>
            <strong>Year Built:</strong> {bridge.yearBuilt}
          </p>
          <p>
            <strong>Estimated Toll Earnings:</strong>{' '}
            {estimate === 0 ? 'unknown' : `${Math.floor(estimate)}Ȼ`}
          </p>
          <p>
            <strong>Estimated Traffic:</strong> {bridge.busyness}
          </p>
        </div>
      </div>
      <div className="backButton">
        <button>
          <Link to="/bridges">Back</Link>
        </button>
      </div>
    </>
  )
}
