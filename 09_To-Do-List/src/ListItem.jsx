import ShowItemModal from "./ShowItemModal.jsx"
const ListItem = ({task, setTaskList, taskList}) =>{

return(
    <div>
    <div className="row m-2">
    <div className="col-6">
      <ShowItemModal 
      task={task} 
      taskList={taskList}
      setTaskList={setTaskList}/>
        <input type="checkbox"/>
          <button 
          className="btn btn-link"
          data-bs-toggle="modal"
          data-bs-target={"#ShowItemModal"+task.id}
          >{task.task}</button>
        </div>
        <div className="col-3">
          {task.limit}
        </div>
        <div className="col">
          {task.location}
        </div>
        </div>
        </div>

)
}

export default ListItem
