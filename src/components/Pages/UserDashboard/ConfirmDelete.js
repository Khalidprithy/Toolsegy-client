import React from 'react';
import toast from 'react-hot-toast';

const ConfirmDelete = ({ deleteProduct, refetch, setDeleteProduct }) => {
    const { name, email } = deleteProduct;

    const handleDelete = () => {
        fetch(`http://localhost:5000/purchase/${email}`, {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount) {
                    toast.success(`Order ${name} is deleted`)
                    refetch();
                    setDeleteProduct(null);
                }
            })
    }

    return (
        <div>
            <input type="checkbox" id="confirm-delete" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-500">Confirm delete product:  {name}</h3>
                    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div class="modal-action">
                        <button
                            onClick={() => handleDelete()}
                            className="btn btn-sm bg-red-500" >Delete</button>
                        <label for="confirm-delete" class="btn btn-sm">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ConfirmDelete;