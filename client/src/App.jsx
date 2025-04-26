import React from 'react'
import Home from './pages/Home'
import AppRouter from './router/AppRouter'
import Admin from './pages/Admin'
import { AuthProvider } from './store/auth'

const App = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  )
}

export default App
