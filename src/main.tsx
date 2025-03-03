import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Toaster } from 'sonner'
import { Provider } from 'react-redux'
import { store } from './utils/redux/store.ts'
import { routes } from './utils/routes/router.tsx'
import { RouterProvider } from 'react-router'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store} >
      <RouterProvider router={routes} />
      <Toaster
        position="top-right"
      />
    </Provider>
  </StrictMode>,
)
