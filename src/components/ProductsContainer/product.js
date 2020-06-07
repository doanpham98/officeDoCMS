import React from "react"

const product = (product) => {
    return <tr>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td><img src={product.image} height="100px" alt="product"/></td>
        <td></td>
    </tr>
}

export default product