import axios from "axios";
import { Link } from "react-router-dom";
import "./product.css";
import Chart from "../../components/chart/Chart"
import { productData } from "../../dummyData"
import { Publish } from "@material-ui/icons";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProduct } from "../../redux/apiCalls";


export default function Product() {
    const location = useLocation()
    const productId = location.pathname.split("/")[2];

    const product = useSelector(state => state.product.products.find(product => product._id === productId))

    const [inputs, setInputs] = useState({
        productName: product.productName,
        productPrice: product.productPrice,
        stock: product.stock,

    });
    const [file, setFile] = useState(null);
    const [color, setColor] = useState(product.color);
    const [size, setSize] = useState(product.size);
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

        updateProduct(product._id, formdata, dispatch)
    }

    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
                <Link to="/newproduct">
                    <button className="productAddButton">Create</button>
                </Link>
            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    <Chart data={productData} dataKey="Sales" title="Sales Performance" />
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src={`http://localhost:5000/api/images/${product.productImageURL}`} alt="" className="productInfoImg" />
                        <span className="productName">{product.productName}</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">id:</span>
                            <span className="productInfoValue">{product._id}</span>
                        </div>
                        {/* <div className="productInfoItem">
                            <span className="productInfoKey">sales:</span>
                            <span className="productInfoValue">5123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">active:</span>
                            <span className="productInfoValue">yes</span>
                        </div> */}
                        <div className="productInfoItem">
                            <span className="productInfoKey">in stock:</span>
                            <span className="productInfoValue">{product.stock}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        <label>Product Name</label>
                        <input name="productName" type="text" placeholder={product.productName} value={inputs.productName} onChange={handleChange} />
                        <label>Price</label>
                        <input name="productPrice" value={inputs.productPrice} type="text" placeholder={product.productPrice} onChange={handleChange} />
                        <label>Color</label>
                        <input name="color" type="text" placeholder={product.color} value={color} onChange={handleColor} />
                        <label>Size</label>
                        <input name="size" type="text" value={size} placeholder={product.size} onChange={handleSize} />
                        <label>Stock</label>
                        <select onChange={handleChange} name="stock" id="idStock">
                            <option value="Available">Available</option>
                            <option value="OutOfStock">OutOfStock</option>
                        </select>
                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img style={{ width: 200, height: 200 }} src={`http://localhost:5000/api/images/${product.productImageURL}`} />
                            <label for="file">
                                <Publish />
                            </label>
                            <input onChange={e => setFile(e.target.files[0])} type="file" id="file" style={{ display: "none" }} />
                        </div>
                        <button onClick={handleClick} className="productButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
