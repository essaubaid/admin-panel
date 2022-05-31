import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/apiCalls";
import "./newProduct.css";

export default function NewProduct() {
  const [inputs, setInputs] = useState({ stock: "Available" });
  const [file, setFile] = useState(null);
  const [color, setColor] = useState([]);
  const [size, setSize] = useState([]);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputs(prev => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }
  const handleColor = (e) => {
    setColor(e.target.value.split(","))
  }
  const handleSize = (e) => {
    setSize(e.target.value.split(","))
  }

  const handleClick = async (e) => {
    e.preventDefault();

    const formdata = new FormData()

    formdata.append('productImage', file)
    formdata.append('productName', inputs.productName)
    formdata.append('productPrice', inputs.productPrice)
    formdata.append('stock', inputs.stock)
    size.map((item) => (
      formdata.append('size', item)
    ))
    color.map((item) => (
      formdata.append('color', item)
    ))

    // const res = await axios.post("http://localhost:5000/api/product/test", formdata)

    // console.log(inputs.productName)

    addProduct(formdata, dispatch)
  }

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input type="file" id="file" onChange={e => setFile(e.target.files[0])} />
        </div>
        <div className="addProductItem">
          <label>Product Name</label>
          <input name="productName" type="text" placeholder="Apple Airpods" onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Product Price</label>
          <input name="productPrice" type="number" placeholder="4000" onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Color</label>
          <input type="text" placeholder="red,yellow" onChange={handleColor} />
        </div>
        <div className="addProductItem">
          <label>Size</label>
          <input type="text" placeholder="M,L" onChange={handleSize} />
        </div>
        <div className="addProductItem">
          <label>Stock</label>
          <select name="stock" onChange={handleChange}>
            <option value="Available">Available</option>
            <option value="OutOfStock">Out Of Stock</option>
          </select>
        </div>
        <button onClick={handleClick} className="addProductButton">Create</button>
      </form>
    </div>
  );
}
