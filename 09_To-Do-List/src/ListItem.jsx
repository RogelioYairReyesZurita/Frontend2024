import AddTaskModal from "./AddTaskModal.jsx"
import ShowItemModal from "./ShowItemModal.jsx"
import PropTypes from "prop-types"
const ListItem = ({ task, setTaskList, taskList }) => {

  return (
    <div>
      <div className="row m-2">
        <div className="col-6">
          <ShowItemModal
            task={task}
            taskList={taskList}
            setTaskList={setTaskList} />

          <AddTaskModal
            task={task}
            taskList={taskList}
            setTaskList={setTaskList} />

          <input type="checkbox" />
          <button
            className="btn btn-link"
            data-bs-toggle="modal"
            data-bs-target={"#ShowItemModal" + task.id}
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

ListItem.protoTypes={
  task: PropTypes.object.isRequired,
  taskList: PropTypes.array.isRequired,
  setTaskList: PropTypes.func.isRequired
}
export default ListItem
