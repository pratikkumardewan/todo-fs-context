import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
    const [todo, setTodo] = useState([])
    const [val, setVal] = useState("")

    async function getAll() {
        const result = await axios.get("http://localhost:8001/todo/getAll")
        console.log(result.data.data)
        setTodo(result.data.data)
    }

    async function addTodo() {
        const data = {
            "title": val
        }
        const result = await axios.post("http://localhost:8001/todo/create", data)
        console.log(result)
        getAll()
        toast.success(result.data.message)
        setVal('')
    }

    async function delTodo(id){
        const result = await axios.delete(`http://localhost:8001/todo/delete/${id}`)
        console.log(result)
        toast.success(result.data.message)
        getAll()
    }

      async function updateTodo(id, data) {
        const result = await axios.put(`http://localhost:8001/todo/update/${id}`, data)
        console.log(result)
        toast.success(result.data.message)
        getAll()
    }


    useEffect(() => {
        getAll()
    }, [])

    return (
        <TodoContext.Provider value={{
            val,
            setVal,
            todo,
            addTodo,
            delTodo,
            updateTodo
        }}>
            {children}
        </TodoContext.Provider>
    );
}

//custom hook
export const useTodo = () => useContext(TodoContext);