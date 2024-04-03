import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../reusable/Card";
import PgogressBar from "../reusable/PgogressBar";
import {getUserList} from '../service/Service'

const Product = () => {
  const [productList, setproductList] = useState([]);
  const [userList, setUserList] = useState([]);

  const [categoryList, setCategoryList] = useState([]);
  const [newProduct, setnewProduct] = useState({
    ProductId: 0,
    ProductSku: "",
    ProductName: "",
    ProductPrice: 0,
    ProductShortName: "",
    ProductDescription: "",
    CreatedDate: "2024-04-01T11:32:33.781Z",
    DeliveryTimeSpan: "",
    CategoryId: 0,
    ProductImageUrl: "",
  });
  const apiUrl = "https://freeapi.gerasim.in/api/BigBasket/";

  useEffect(() => {
    getAll();
    getAllCategiry();
    getAllUser()
  }, []);

  const getAllUser = async () => {
    getUserList().then(result=>{
      setUserList(result.data)
    })
   
};


  const updateFormValue = (event, key) => {
    setnewProduct((prevObj) => ({ ...prevObj, [key]: event.target.value }));
  };

  const getAll = async () => {
    const result = await axios.get(`${apiUrl}GetAllProducts`);
    setproductList(result.data.data);
  };
  const getAllCategiry = async () => {
    const result = await axios.get(`${apiUrl}GetAllCategory`);
    setCategoryList(result.data.data);
  };

  const addNew = async () => {
    debugger;

    const result = await axios.post(`${apiUrl}CreateProduct`, newProduct);
    debugger;
    if (result.data.result) {
      alert("Patient Created Successfully");
      getAll();
    } else {
      alert(result.data.message);
    }
  };
  const perv = '80'
  return (
    <div> 
      <PgogressBar progressValue={perv} bgColor={'bg-danger'}></PgogressBar>
      <div className="row">
        <div className="col-8">
          <div className="card">
            <div className="card-header bg-primary">Patient List</div>
            <div className="card-body">
              <div className="row">
                {productList.map((item, index) => {
                  return (
                    <div className="col-3">
                      <Card product={item}></Card>
                     </div> 
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card">
            <div className="card-header bg-primary">New Product</div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <label>Product Sku</label>
                  <input
                    type="text" onChange={(event)=>{updateFormValue(event,'ProductSku')}}
                    placeholder="Enter ProductSku"
                    className="form-control"
                  />
                </div>
                <div className="col-md-6">
                  <label>Product Name</label>
                  <input
                    type="text" onChange={(event)=>{updateFormValue(event,'ProductName')}}
                    placeholder="Enter Product Name"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label>Price</label>
                  <input
                    type="text" onChange={(event)=>{updateFormValue(event,'ProductPrice')}}
                    placeholder="Enter Price"
                    className="form-control"
                  />
                </div>
                <div className="col-md-6">
                  <label>Short Name</label>
                  <input
                    type="text" onChange={(event)=>{updateFormValue(event,'ProductShortName')}}
                    placeholder="Enter Short name"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label>Description</label>
                  <input
                    type="text" onChange={(event)=>{updateFormValue(event,'ProductDescription')}}
                    placeholder="Enter Description"
                    className="form-control"
                  />
                </div> 
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label>Delivery Time Span</label>
                  <input
                    type="text" onChange={(event)=>{updateFormValue(event,'DeliveryTimeSpan')}}
                    placeholder="Enter Delivery Time Span"
                    className="form-control"
                  />
                </div>
                <div className="col-md-6">
                  <label>Select Category</label>
                  <select class="form-select" onChange={(event)=>{updateFormValue(event,'CategoryId')}}>
                    {categoryList.map((item) => {
                      return (
                        <option value={item.categoryId}>
                          {item.categoryName}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <label>Image</label>
                  <input
                    type="text" onChange={(event)=>{updateFormValue(event,'ProductImageUrl')}}
                    placeholder="Enter Delivery Time Span"
                    className="form-control"
                  />
                </div>
              </div>

              <div className="row pt-3">
                <div className="col-6 text-center">
                  <button className="btn btn-secondary">Reset</button>
                </div>
                <div className="col-6 text-center">
                  <button className="btn btn-success" onClick={addNew}>
                    Create Patient
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
