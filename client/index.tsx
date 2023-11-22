import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { routes } from './routes.tsx'
import { Auth0Provider } from '@auth0/auth0-react'

const queryClient = new QueryClient()

const router = createBrowserRouter(routes)

const root = createRoot(document.getElementById('app') as HTMLElement)
root.render(
  <Auth0Provider
    domain="dev-nk18xa4gfp361w7b.au.auth0.com"
    clientId="mj53PtVJE70bCrMkheOExz8hYlEu5ob6"
    redirectUri={window.location.origin}
    audience="https://troll-toll/api"
  >
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </Auth0Provider>
)
