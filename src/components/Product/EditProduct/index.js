import './EditProduct.scss'
import { useState, useRef, useEffect } from 'react';
import Modal from 'react-modal';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';
import { getCategoryList } from '../../../services/categoryServices';

export default function EditProduct({ item, onReload }) {
    const [showModal, setShowModal] = useState(false);
    const [categoryData, setCategoryData] = useState([]);
    const [productData, setProductData] = useState(item)
    const optionRef = useRef();
    
    useEffect(() => {
        const fetchApi = async () => {
            const result = await getCategoryList();
            setCategoryData(result);
        }
        fetchApi();
    }, [])

    // Modal Styles
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    // Logic Handle:
    const handleChange = (e) => {
        const value = e.target.value; 
        const name = e.target.name;
        setProductData({
            ...productData,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (productData) {
            fetch(`http://localhost:3000/products/${productData.id}`, {
                method: "PATCH",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(productData) // vi la gui len dang object nen phai chuyen lai thanh dang json
            })
                .then(res => res.json())
                .then(data => {})
                setShowModal(false);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Your product has been updated !',
                    showConfirmButton: false,
                    timer: 1500
                })
            onReload();
        }
    }

    const handleShowModal = () => {
        setShowModal(true);
        console.log(item);
    }

    const handleClose= (e) => {
        setShowModal(false);
        setProductData(item);
    }

    return (
        <>
            <button className='product__edit' onClick={handleShowModal}>Edit</button>
            <Modal isOpen={showModal}
            onRequestClose={handleClose}
            style={customStyles}
            contentLabel="Example Modal">
                <h2 className='form__name'>Edit Product</h2>
                <form className='form' onSubmit={handleSubmit}>
                    <table>
                        <tbody>
                            <tr>
                                <td>Product Name :</td>
                                <td>
                                    <input type="text" name='title' onChange={handleChange} required value={productData.title}/>
                                </td>
                            </tr>
                            <tr>
                                <td>Category :</td>
                                <td>
                                    <select name='category' onChange={handleChange} ref={optionRef} defaultValue={productData.category}>
                                        {categoryData.length > 0 && categoryData.map((item, index) => 
                                            <option value={item} key={index}>{item}</option>
                                        )}
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>Price :</td>
                                <td>
                                    <input type="text" name='price' onChange={handleChange} required value={productData.price}/>
                                </td>
                            </tr>
                            <tr>
                                <td>Discount :</td>
                                <td>
                                    <input type="text" name='discountPercentage' onChange={handleChange} required value={productData.discountPercentage}/>
                                </td>
                            </tr>
                            <tr>
                                <td>In Stock :</td>
                                <td>
                                    <input type="text" name='stock' onChange={handleChange} required value={productData.stock}/>
                                </td>
                            </tr>
                            <tr>
                                <td>Image URL :</td>
                                <td>
                                    <input type="text" name='thumbnail' onChange={handleChange} required value={productData.thumbnail}/>
                                </td>
                            </tr>
                            <tr>
                                <td>Description :</td>
                                <td>
                                    <textarea className='form__des' name='description' cols="50" rows="5" onChange={handleChange} value={productData.description}></textarea>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='form__btn'>
                        <button className='form__btn__create'>Update</button>
                        <button className='form__btn__cancel' onClick={handleClose}>Cancel</button>
                    </div>
                </form>
            </Modal>
        </>
    )
}