import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { History } from './pages/HIstory/History'
import { DefaultLayout } from './Components/layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={<DefaultLayout />}
      >
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/history"
          element={<History />}
        />
      </Route>
    </Routes>
  )
}
