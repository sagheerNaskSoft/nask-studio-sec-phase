import React, { useState } from 'react'
import Card from 'react-bootstrap/card'
import Modal from 'react-bootstrap/modal'
import { products } from '../../Context/dummy';
import { Button, FallBackImage } from '../TagsUse/data';

function Listing() {
    const [show, setShow] = useState(false);
    const [image, setImage] = useState('')
    const handleClose = () => setShow(false);
    const [filterproducts, setProducts] = useState(products)
    const handleShow = (img) => {
        setImage(img)
        setShow(true)
    };
    const handleSearch = (value) => {
        let search = products.filter((item) => item.title.toLowerCase().includes(value.toLowerCase()))
        setProducts(search)
    }
    return (
        <div style={{ background: "black" }}>
            <div className='container our_product py-5'>
                <div className='d-flex justify-content-between align-items-center flex-wrap'>
                    <h5 className='m-md-0 my-2'>Our Props</h5>
                    <input onChange={(e) => handleSearch(e.target.value)} type="text" className="inp" placeholder="Search by Name" />
                </div>
                <div className='grid my-4'>
                    {filterproducts?.map((item) => {
                        return (
                            <Card onClick={() => handleShow(item?.image)}  className='card card_props border-0 my-2'>
                                < FallBackImage src={item?.image
                                } fallbackSrc={item?.image} />
                                <Card.Body className='p-0 mt-3'>
                                    <p className='pera_text m-0'>
                                        {item?.title}
                                    </p>
                                    <span className='price'>Price: {item?.price}</span>
                                </Card.Body>
                            </Card>
                        )
                    })}
                </div>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    </Modal.Header>
                    <Modal.Body>
                        <FallBackImage src={image} fallbackSrc={image} className={"w-100"} style={{ objectFit: "cover" }} />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className={"booking_btn"} text="Close" submit={handleClose} />


                    </Modal.Footer>
                </Modal>
            </div >

        </div>
    )
}

export default Listing