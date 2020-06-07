import React, { useState } from "react"
import {Button,Modal,Input,FormGroup,Label,Form} from 'reactstrap'
import { useDispatch } from "react-redux"
import {editProductAsync,deleteProductAsync} from '../../actions/table'

const Product = (product) => {
  
  const dispatch = useDispatch()

  const [modalEdit, setModalEdit] = useState(false)

  const toggleEdit = () => setModalEdit(!modalEdit)

  const [modalDelete, setModalDelete] = useState(false)

  const toggleDelete = () => setModalDelete(!modalDelete)
  
  const onSubmitEditForm = (e)=>{
    const name = e.target.productName.value
    const price = e.target.productPrice.value
    const image = e.target.productImage.value
    if(name===''||price===''){
        alert("check name input or price input, you not be blank ")
        e.preventDefault()
        return false
    }
    else if (isNaN(price)){
        alert("Price must be a number")
        e.preventDefault()
        return false
    }
    else {
        dispatch(editProductAsync(product.id,{
            name:name,
            price:price,
            image:image
        }))
    } 
  }

  const onDeleteButton =()=>{
      dispatch(deleteProductAsync(product.id))
  }

    return <tr>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td><img src={product.image} height="100px" alt="product"/></td>
        <td className="button-group"><Button color="secondary" onClick={toggleEdit}>Edit</Button>
        <Modal isOpen={modalEdit} toggle={toggleEdit} >
        <Form onSubmit={(e)=>onSubmitEditForm(e)} className="add-form">
           <h1>Edit Product</h1>
           <FormGroup>
               <Label for="productName">Product Name <span style={{color:"red"}}>(*)</span> </Label>
               <Input type="text" name="productName" id="productName" defaultValue={product.name}></Input>
           </FormGroup>
           <FormGroup>
               <Label for="productPrice">Product Price <span style={{color:"red"}}>(*)</span> </Label>
               <Input type="text" name="productPrice" id="productPrice" defaultValue={product.price}></Input>
           </FormGroup>
           <FormGroup>
               <Label for="productImage">Product Image(link)</Label>
               <Input type="text" name="productImage" id="productImage" defaultValue={product.image}></Input>
           </FormGroup>
           <Button className="btn-submit-add" color="success" onSubmit={(e)=>onSubmitEditForm(e)} >Submit</Button>
       </Form>
        </Modal>
        <Button color="danger" onClick={toggleDelete}>Delete</Button></td>
        <Modal isOpen={modalDelete} toggle={toggleDelete}style={{marginTop:"200px"}}>
            <div style={{padding:"20px"}}>
            <h4 style={{textAlign:"center"}}>You sure want to delete this product?</h4>
            <Button onClick={onDeleteButton} color="success" className="button button-yes">Yes</Button><Button onClick={toggleDelete} className="button button-no" >No</Button>
            </div>
        </Modal>
    </tr>
}

export default Product