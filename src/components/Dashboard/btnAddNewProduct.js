import React from 'react'
import { Button, Modal ,Form, FormGroup, Label, Input } from 'reactstrap'
import { useDispatch } from 'react-redux';
import {addNewProductAsync} from '../../actions/product'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

export default function AddNewProduct() {

    const [modal, setModal] = React.useState(false);

    const toggle = () => setModal(!modal);
    
    const dispatch=useDispatch()

    const onSubmitAddForm = (e)=>{
        e.preventDefault()
         const name = e.target.productName.value
         const price = e.target.productPrice.value
         const image = e.target.productImage.value
         if(name===''||price===''){
             alert("check name input or price input, you not be blank ")
             return false
         }
         else if (isNaN(price)){
             alert("Price must be a number")
             return false
         }
         else {
             dispatch(addNewProductAsync({
                name:name,
                price:price,
                image:image
            } ))
            toggle()
         } 
    }

    return <div>
        <Button color="primary" onClick={toggle}><FontAwesomeIcon icon={faPlusCircle}/>  Add</Button>
        <Modal isOpen={modal} toggle={toggle}>
       <Form onSubmit={(e)=>onSubmitAddForm(e)} className="add-form">
           <h1>Add New Product</h1>
           <FormGroup>
               <Label for="productName">Product Name <span style={{color:"red"}}>(*)</span> </Label>
               <Input type="text" name="productName" id="productName" placeholder="new product name..."></Input>
           </FormGroup>
           <FormGroup>
               <Label for="productPrice">Product Price <span style={{color:"red"}}>(*)</span> </Label>
               <Input type="text" name="productPrice" id="productPrice" placeholder="new product price..."></Input>
           </FormGroup>
           <FormGroup>
               <Label for="productImage">Product Image(link)</Label>
               <Input type="text" name="productImage" id="productImage" placeholder="new product image..."></Input>
           </FormGroup>
           <Button className="btn-submit-add" color="success" onSubmit={(e)=>onSubmitAddForm(e)} >Submit</Button>
       </Form>
       </Modal>
    </div>
}