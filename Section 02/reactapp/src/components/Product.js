import React from 'react';
import {Formik} from 'formik';
import Swal from"sweetalert2";

const Product = () => {

    const userSubmit = async (formdata) => {
        console.log(formdata);

        //1.url
        //2.request method
        //3.data
        //4.data format
        //asynchronous function -returns promise 

       const response =await fetch("http://localhost:5000/product/add",{
            method:"POST",
            body:JSON.stringify(formdata),
            headers:{
                "Content-Type":"application/json"
            }
        })
        if (response.status===200){
            console.log("product data added ");
            Swal.fire({
                icon:"success",
                title:"well done",
                text:"Product Added Successfully "
            })
        }
        console.log("request sent ");



    }
    
    return (
        <div className='container'>
            <div className="card">
                <div className="card-body">
                    <h3 className="text-center">Product Details</h3>
                    <Formik
                        initialValues={{title: '', size: '', color: '', price: 0}}
                        onSubmit={userSubmit}
                    >
                        {({values, handleSubmit, handleChange}) => (
                            <form onSubmit={handleSubmit}>
                            <label className='mt-5'>Product Title</label>
                            <input type="String" className='form-control' placeholder='Enter Product Title' id="title" onChange={handleChange} value={values.username} />
                            
                            <label className='mt-3'>Size</label>
                            <input type="Number" className='form-control'placeholder='Enter size of product' id="size" onChange={handleChange} value={values.email} />
                            
                            <label className='mt-3'>Color</label>
                            <input type="String" className='form-control'placeholder=' Enter color of product ' id="color" onChange={handleChange} value={values.password} />
                            
                            <label className='mt-3'>Price</label>
                            <input type="Number" className='form-control'placeholder='Enter the price' id="price" onChange={handleChange} value={values.age} />
    
                            <button type="submit" className='btn btn-primary mt-5'>Submit</button>
    
                        </form>
                        )}
                    </Formik>
                    
                </div>
            </div>
        </div>
    )

}

export default Product