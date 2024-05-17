const CityCardPlaceholder = () => {

    return (
        <>
            <div className="card-img-top col-12 placeholder" style={{height: '200px'}}/>
            <div className="card-body">
                <h5 className="card-title placeholder-glow">
                    <span className="placeholder col-6"></span>
                </h5>
                <p className="card-text placeholder-glow">
                    <span className="placeholder col-7 m-1"></span>
                    <span className="placeholder col-4"></span>
                    <span className="placeholder col-4 m-1"></span>
                    <span className="placeholder col-6"></span>
                </p>
            </div>
        </>
    )
}

export default CityCardPlaceholder