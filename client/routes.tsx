import { Route, createRoutesFromElements } from 'react-router-dom'

import App from './components/App.tsx'
import Bridges from './components/BridgeList.tsx'
import Home from './components/Home.tsx'
import SingleBridge from './components/SingleBridge.tsx'

export const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Home />} />
    <Route path="bridges" element={<Bridges />} />
    <Route path="bridges/:id" element={<SingleBridge />} />
  </Route>
)
