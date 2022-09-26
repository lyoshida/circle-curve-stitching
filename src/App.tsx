import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import 'antd/dist/antd.css'
import MainLayout from './components/MainLayout/MainLayout'
import { RecoilRoot } from 'recoil'

function App() {
  return (
    <RecoilRoot>
      <div className="App">
      <MainLayout/>
    </div>
    </RecoilRoot>
  )
}

export default App
