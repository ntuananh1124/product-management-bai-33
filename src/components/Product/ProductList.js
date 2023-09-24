import LoadingSpinner from './LoadingSpinner';
import './Product.scss';
import { useState, useEffect, useContext } from 'react';
import { ReloadContext } from '../Product';
import EditProduct from './EditProduct';
import DeleteProduct from './DeleteProduct';
import { getProductList } from '../../services/productServices';

export default function ProductList() {
    const reloadProduct = useContext(ReloadContext);
    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(true);
    const [editReload, setEditReload] = useState(false)

    useEffect(() => {
        const fetchApi = async () => {
            const result = await getProductList();
            setData(result);
            setLoading(false);
        }
        setTimeout(fetchApi, 1500);
    }, [reloadProduct, editReload]);

    const handleEditReload = () => {
        setEditReload(!editReload);
    }

    return (
        <>
            <h1>Product List</h1>
            <div className='product__list'>
                {isLoading ? <LoadingSpinner/> : (
                    <>
                        {data.map((item, index) => 
                            <>
                                <div className='product__item' key={item.id}>
                                    <div className="product__img">
                                        <img src={item.thumbnail} alt={item.thumbnail}/>
                                        <span className="product__discount">-{Math.floor(item.discountPercentage)}%</span>
                                    </div>
                                    <div className="product__info">
                                        <h2 className="product__name">{item.title}</h2>
                                        <span className="product__des">{item.description}</span>
                                        <h3 className="product__price">${item.price}</h3>
                                    </div>
                                    <div className='product__action'>
                                        <EditProduct item={item} onReload={handleEditReload}/>
                                        <DeleteProduct item={item} onReload={handleEditReload} />
                                    </div>
                                </div>
                            </>
                        )}
                    </>
                    )}
            </div>
        </>
    )
}