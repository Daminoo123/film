import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import '../AddMovies/AddMovie.css'


export const AddMovie = ({add}) => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [description,setdescritpion] = useState('')
  const [title,settitle] = useState('')
  const [rate,setrate] = useState('')
  const [posterUrl,setposterurl] = useState('')

  const handletitle = (e) =>{
    settitle(e.target.value)
  }
  const handlerate = (e) =>{
    setrate(e.target.value)
  }
  const handleposterurl = (e) =>{
    setposterurl(e.target.value)
  }
  const handledescription = (e) =>{
    setdescritpion(e.target.value)
  }
  const handleadd = ()=>{
   let newMovie={title,rate,description,posterUrl }
   add(newMovie)
  }
  return (
    <div>
        <Button variant="primary" onClick={handleShow}>
        add Movie
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add your movie</Modal.Title>
          </Modal.Header>
          <Modal.Footer>
        <Form.Label className='labell'>title</Form.Label>
        <Form.Control type="text" placeholder="title" onChange={(e)=> handletitle(e)} />
        <Form.Label className='labell'>posterurl</Form.Label>
        <Form.Control type="text" placeholder="movie img" onChange={(e)=> handleposterurl(e)}/>
        <Form.Label className='labell'>rate</Form.Label>
        <Form.Control type="text" placeholder="movie rate" onChange={(e)=> handlerate(e)} />
        <Form.Label className='labell'>description</Form.Label>
        <Form.Control type="text" placeholder="movie description"onChange={(e)=> handledescription(e)}/>
          <Button  variant="primary"onClick ={()=> handleadd()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}
