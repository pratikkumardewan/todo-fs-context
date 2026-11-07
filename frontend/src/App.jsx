import UpdateModal from './components/UpdateModal'
import { TodoProvider } from './context/TodoContext'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <TodoProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/update/:id" element={<UpdateModal />} />
          </Routes>
        </BrowserRouter>
      </TodoProvider>
    </>
  )
}

export default App