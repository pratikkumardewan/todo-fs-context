
import { useState } from "react";
import { ImBin } from "react-icons/im";
import { LuNotebookPen } from "react-icons/lu";
import DeleteModal from "./DeleteModal";
import { Link } from "react-router-dom";
import { useTodo } from "../context/TodoContext";

const Card = ({ title, id }) => {

  const [delModal, setdelModal] = useState(false)
  const [todoToDel, setTodoToDel] = useState(null)

  const { delTodo } = useTodo()

  function handleDelModal(id) {
    setdelModal(true)
    setTodoToDel(id)
  }

  function cancelDel() {
    setdelModal(false)
    setTodoToDel(null)
  }


  async function confirmDel() {
    delTodo(todoToDel)
    setdelModal(false)
    setTodoToDel(null)
  }

  return (
    <div className="flex justify-center items-center gap-2 mb-2">
      <div className="w-[70%] bg-slate-200 p-2">{title}</div>
      <div className="w-[30%]">
        <Link to={`/update/${id}`}>
          <button className="p-2 bg-green-400 text-white rounded me-2 text-xl">
            <LuNotebookPen />
          </button>
        </Link>
        <button className="p-2 bg-red-400 text-white rounded text-xl" onClick={() => handleDelModal(id)}>
          <ImBin />
        </button>
      </div>
      {delModal && <DeleteModal cancelDel={cancelDel} confirmDel={confirmDel} />}
    </div>
  );
};

export default Card;

