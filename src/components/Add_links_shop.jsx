import React, { useState } from 'react'
import "./AddLinksShop.css"

function Add_links_shop({showModal, setShowModal }) {
    // const [showModal, setShowModal] = useState(false);
    // const [formData, setFormData] = useState({ title: "", url: "", application: "", toggle: false });
    return (

        <div className='portfolio'>
            <div className='portfolio-div'>
                {/*  */}
                <span className='btn-group'>
                    <button className='add btn-link active'>
                        Add Link
                    </button>
                    <button className='add btn-shop'>
                        Add Shop
                    </button>
                </span>

                <button className='addData' onClick={() => setShowModal(!showModal)}>+ Add</button>

                

            </div>
        </div>
    )
}

export default Add_links_shop