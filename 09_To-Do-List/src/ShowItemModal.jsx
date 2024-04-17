const ShowItemModal = () => {
    return(
        <div 
        className="modal fade" 
        id="showItemModal"
        >
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 
                        className="modal-title" 
                        id="showItemModalLabel"
                        >Show Item</h1>
                        <button 
                        type="button" 
                        className="btn-close"
                        data-bs-dismiss="modal"
                        ></button>
                    </div>
                    <div className="modal-body">
                        Shows the item selected information
                    </div>
                    <div className="modal-footer">
                        <button 
                        type="button" 
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                        >close</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default ShowItemModal