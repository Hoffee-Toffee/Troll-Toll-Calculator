// import { Link } from 'react-router-dom'
// import BridgesList from './BridgeList'
// import { getSingleBridgeApi } from '../api/bridge.ts'
// import { useQuery } from '@tanstack/react-query'

// export default function SingleBridge() {
//   const {
//     data: bridge,
//     error,
//     isLoading,
//   } = useQuery({ queryKey: ['bridges'], queryFn: getSingleBridgeApi })

//   if (error) {
//     return <p>Your bridges are gone! What a massive error</p>
//   }
//   if (!bridge || isLoading) {
//     return <p>Fetching bridges from auckland...</p>
//   }
//   return (
//     <>
//       <button>
//         <Link to={'/'}>Home</Link>
//       </button>
//       <button>
//         <Link to="/bridges">Bridge List</Link>
//       </button>
//       <h1>This is Single Troll bridedeafdadkj!</h1>
//       <h2>{bridge.name}</h2>
//     </>
//   )
// }
import { Bridge } from '../../models/bridge.ts'
import { getBridgesApi } from '../api/bridge.ts'
import { useQuery } from '@tanstack/react-query'
import { Link, useParams } from 'react-router-dom'

export default function SingleBridge() {
  //Props :Bridge
  const { id } = useParams()
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

  const bridge = bridges.filter((br) => br.id === Number(id))
  console.log(bridge[0].length_meters)
  return (
    <>
      <button>
        <Link to={'/'}>Home</Link>
      </button>
      <button>
        <Link to="/bridges">Bridge List</Link>
      </button>
      <h1>{bridge[0].name}</h1>

      <p>Type: {bridge[0].name}</p>
      <p>Lanes: {bridge[0].lanes}</p>
      <p>Length: {bridge[0].length_meters}</p>
      <p>Location: {bridge[0].location}</p>
      <p>Type: {bridge[0].type}</p>
      <p>Year Built: {bridge[0].year_built}</p>
    </>
  )
}
