import Card from "./Card"

const MainSection = ({ todo }) => {
    return (
        <div className='w-[25%] m-auto mt-6'>
            {
                todo.map((item) =><Card key={item._id} title={item.title} id={item._id}/> )
            }
        </div>
    )
}

export default MainSection