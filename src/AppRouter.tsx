import { FC, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from 'src/features/Main'

// Routes
const Landing = lazy(() => import('src/features/Landing'))
const Transmission = lazy(() => import('src/features/Transmission'))

const AppRouter: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main />}>
        <Route index element={<Landing />} />
        <Route path='/transmission' element={<Transmission />} />
      </Route>
    </Routes>
  </BrowserRouter>
)

export default AppRouter
