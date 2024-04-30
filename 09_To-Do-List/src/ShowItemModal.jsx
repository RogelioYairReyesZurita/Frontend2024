import Swal from "sweetalert2"

const ShowItemModal = ({ task, taskList, setTaskList }) => {

    const handleDeleteClick = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                const newTaskList = taskList.filter((taskItem) => taskItem.id !== task.id)
                localStorage.setItem('taskList', JSON.stringify(newTaskList))
                setTaskList(newTaskList)

                Swal.fire({
                    title: 'Deleted!',
                    text: "Your task has been deleted",
                    icon: 'success',
                })
            }
        })
    }

    return (
        <div className="modal fade" id={"ShowItemModal" + task.id}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title" id="ShowItemModalLabel">
                            ({task.id}){task.task}
                        </h1>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                        ></button>
                    </div>
                    <div className="modal-body">
                        <div className="modal-body container">
                            <div className="row">
                                <p>{task.description}</p>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <i className="bi bi-geo-alt-fill"></i>
                                    {task.location}
                                </div>
                                <div className="col">
                                    <i className="bi bi-clock-fill"></i>
                                    {task.limit}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button
                            className="btn btn-sm btn-outline-danger"
                            onClick={handleDeleteClick}
                            data-bs-dismiss='modal'>
                            <i className="bi bi-trash"></i>Delete
                        </button>
                        <button className="btn btn-sm btn-outline-primary">
                            <i className="bi bi-pencil-square"></i>Edit
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

export default ShowItemModal