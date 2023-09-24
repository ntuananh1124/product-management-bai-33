import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

export default function DeleteProduct({item, onReload}) {
    // Alert
    const handleShowAlert = () => {
        Swal.fire({
            title: 'Are you sure about delete this product?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
            })
                .then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire(
                        'Deleted!',
                        'Your product has been deleted.',
                        'success'
                        )
                        fetch(`http://localhost:3000/products/${item.id}`, {
                            method: "DELETE",
                            headers: {
                                Accept: "application/json",
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(item) // vi la gui len dang object nen phai chuyen lai thanh dang json
                        })
                            .then(res => res.json())
                            .then(data => {})
                        onReload();
                    }
        })
    }

    return (
        <>
            <button className='product__delete' onClick={handleShowAlert}>Delete</button>
        </>
    )
}