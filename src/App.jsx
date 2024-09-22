import react from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Auth from './page/Auth'
import { Route, Router, Routes } from 'react-router-dom'
import Start from './page/Start'
import Chat from './page/Chat'
import Message from './page/Message'

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/message" element={<Message />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
    </>
  )
}

export default App
