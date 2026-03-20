import Subheader from './Subheader';
import Sidebar from './Sidebar';
import ProductList from './ProductList';

const Shop = () => {
    return (
        <>
            <Subheader title="Shop" />
            <div className="shop">
                <Sidebar />
                <ProductList />
            </div>
        </>
    );
};

export default Shop;