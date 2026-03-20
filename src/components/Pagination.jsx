const Pagination = () => {
    return (
        <>
            <div className="pagination">
                <div className="pages">
                    <span className="page active">1</span>
                    <span className="page">2</span>
                    <span className="page">3</span>
                    <span className="page">4</span>
                    <span className="page">5</span>
                </div>
                <button className="button">Next</button>
            </div>
        </>
    );
};

export default Pagination;