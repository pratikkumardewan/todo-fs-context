import Header from '../components/Header'
import Footer from '../components/Footer'
import MainSection from '../components/MainSection'
import { useTodo } from '../context/TodoContext'

const Home = () => {

    const {val, setVal, addTodo, todo} = useTodo()
  
    return (
        <div>
            <Header />
            <div className='text-center mt-6'>
                <input className='bg-gray-200 p-3 border rounded me-3 w-64' type="text" value={val} placeholder='enter task' onChange={(e) => setVal(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") addTodo()

                    }} />
                <button onClick={addTodo} className='p-2 bg-green-500 text-white text-xl rounded' >Add</button>
            </div>
            <MainSection todo={todo} />
            <Footer />
        </div>
    )
}

export default Home