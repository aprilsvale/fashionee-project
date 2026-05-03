const Pagination = ({onPageChange, currentPage}) => {

    return (
        <>
            <div className="pagination">
                <div className="pages">
                    <button
                        className="page"
                        onClick={() => {
                            console.log('Клик по 1, передаю:', 1);
                            onPageChange(1);
                        }}
                    >1</button>
                    <button
                        className="page"
                        onClick={() => onPageChange(2)}
                    >2</button>
                    <button
                        className="page"
                        onClick={() => onPageChange(3)}
                    >3</button>
                </div>
                <button
                    className="button"
                    onClick={() => {
                        console.log('Next, передаю:', currentPage + 1);
                        onPageChange(currentPage + 1);
                    }}

                    disabled={currentPage === 3}
                >Next</button>
            </div>
        </>
    );
};

export default Pagination;