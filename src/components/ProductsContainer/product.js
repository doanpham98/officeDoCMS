import React, { useState } from "react"
import {Button,Modal,Input,FormGroup,Label,Form} from 'reactstrap'
import { useDispatch } from "react-redux"
import {editProductAsync} from '../../actions/table'

const Product = (product) => {
  
  const dispatch = useDispatch()

  const [modal, setModal] = useState(false)

  const toggle = () => setModal(!modal)
  
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

    return <tr>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td><img src={product.image} height="100px" alt="product"/></td>
        <td className="button-group"><Button color="secondary" onClick={toggle}>Edit</Button>
        <Modal isOpen={modal} toggle={toggle} >
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
        <Button color="danger">Delete</Button></td>
    </tr>
}

export default Product