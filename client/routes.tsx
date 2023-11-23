import { Route, createRoutesFromElements } from 'react-router-dom'

import App from './components/App.tsx'
import Bridges from './components/BridgeList.tsx'
import Home from './components/Home.tsx'
import SingleBridge from './components/SingleBridge.tsx'
import Trollfile from './components/Trollfile.tsx'

export const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Home />} />
    <Route path="bridges" element={<Bridges />} />
    <Route path="bridge/:id" element={<SingleBridge />} />
    <Route path="trollfile/:id" element={<Trollfile />} />
  </Route>
)
