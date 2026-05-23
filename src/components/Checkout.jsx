const Checkout = ({orderTotal}) => {
    const handleCheckout = () => {
        console.log("Checkout", orderTotal);
    }

    return (
        <div className="button-wrapper">
            <button
                className="button"
                onClick={handleCheckout}
            >Checkout</button>
            <div className="vertical-line"></div>
        </div>
    )
}

export default Checkout;