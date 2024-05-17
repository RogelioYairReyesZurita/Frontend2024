import React from "react"
import PropTypes from "prop-types"
import { useForm } from "./Hooks/UseForm.js"
import withReactContent from "sweetalert2-react-content"
import Swal from "sweetalert2"
import { v4 as uuidv4 } from 'uuid'

const taskInfo = {
    task: '',
    description: '',
    location: '',
    limit: '',
}

const AddTaskModal = ({task=null, taskList, setTaskList }) => {
    const [values, handleInputChange, reset] = useForm(task || taskInfo)

    const MySwal = withReactContent(Swal)

    const HandleSaveClick = () => {
        let newTaskList=[]

        if(task){
            newTaskList=taskList.map((taskItem)=>{
                if (taskItem.id===task.id) {
                    task.task=values.task
                    task.description=values.description
                    task.location=values.location
                    task.limit=values.limit
                }
                return taskItem
            })
        }else{

        
        newTaskList = [...taskList, {
            id: uuidv4(),
            ...values,
            done: false
        }]
    }

        setTaskList(newTaskList)

        localStorage.setItem('taskList', JSON.stringify(newTaskList))

        reset()
        MySwal.fire({
            icon: 'success',
            title: task ? 'Task updated':'Task Added',
        })
    }

    const id=task?.id || ''
    return (
        <div className="modal fade" id={"AddTaskModal"+id}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title" id="AddTaskModalLabel">
                            {task ? "Edit task" : "Add New Task"}
                        </h1>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                        ></button>
                    </div>
                    <div className="modal-body">
                        <div className="modal-body container">
                            <div className="row text-start">
                                <div className="col">
                                    <label
                                        className="form-label"
                                        htmlFor="task"
                                    >Task</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="task"
                                        name="task"
                                        value={values.task}
                                        onChange={handleInputChange} />

                                    <label
                                        className="form-label"
                                        htmlFor="description"
                                    >Description</label>
                                    <textarea
                                        className="form-control"
                                        id="description"
                                        name="description"
                                        value={values.description}
                                        onChange={handleInputChange} />

                                    <label
                                        className="form-label"
                                        htmlFor="location"
                                    >Location</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="location"
                                        name="location"
                                        value={values.location}
                                        onChange={handleInputChange} />

                                    <label
                                        className="form-label"
                                        htmlFor="limit"
                                    >Limit time</label>
                                    <input
                                        type="time"
                                        className="form-control"
                                        id="limit"
                                        name="limit"
                                        value={values.limit}
                                        onChange={handleInputChange} />
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="modal-footer">
                        <button
                            data-bs-dismiss="modal"
                            className="btn btn-sm btn-outline-primary"
                            onClick={HandleSaveClick}
                        >
                            <i className="bi bi-pencil-square"></i>Save
                        </button>
                        <button
                            type="button"
                            className="btn btn-outline-secondary"
                            data-bs-dismiss="modal"
                        >Close</button>
                    </div>

                </div>
            </div>
        </div>

    )
}

AddTaskModal.protoTypes={
    task: PropTypes.object,
    taskList: PropTypes.array.isRequired,
    setTaskList: PropTypes.func.isRequired
}

export default AddTaskModal