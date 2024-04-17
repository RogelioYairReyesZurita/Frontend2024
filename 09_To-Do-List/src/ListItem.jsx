import ShowItemModal from "./ShowItemModal"

const ListItem=({task,limit})=>{
    return(
      <div>
        <div className="row m-2">
          <div className="col-6">
            <ShowItemModal/>
            <button 
            className="btn btn-link"
            data-bs-toggle="modal"
            data-bs-target="#showItemModal"
            >{task}</button>
          </div>
          <div className="col-2">
            {limit}
          </div>
          <div className="col">
            <buttton className="btn btn-sm btn-outline-primary">
              <i class="bi bi-pencil-square"></i>
            </buttton>
            <buttton className="btn btn-sm btn-outline-danger">
              <i class="bi bi-trash3"></i>
            </buttton>
          </div>
        </div>
      </div>
    )
}
export default ListItem
