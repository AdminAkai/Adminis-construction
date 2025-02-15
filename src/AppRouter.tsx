import { FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './features/Landing'
import Main from './features/Main'

const AppRouter: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main />}>
        <Route index element={<Landing />} />
      </Route>
    </Routes>
  </BrowserRouter>
)

export default AppRouter
