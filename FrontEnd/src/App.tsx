import './App.css'
import HomePage from './Page/User/HomePage'

import { cn } from "./lib/utils"

function App() {

  return (
    <div className={cn(
      "min-h-screen bg-background font-sans antialiased",
      'font-[Poppins", sans-serif]'
    )}
    >
      <HomePage />
    </div>
  )
}

export default App
