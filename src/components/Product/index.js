import ProductList from "./ProductList";
import CreateProduct from "./CreateProduct";
import { useState, createContext } from 'react';

export const ReloadContext = createContext();

export default function Product() {
    const [ reloadProduct, setReloadProduct ] = useState(false);

    function handleReload() {
        setReloadProduct(!reloadProduct);
    }
    return (
        <>
            <ReloadContext.Provider value={reloadProduct}>
                <div className="product__box" style={{padding: 30}}>
                    <ProductList />
                    <CreateProduct onReload={handleReload} />
                </div>
            </ReloadContext.Provider>
        </>
    )
}