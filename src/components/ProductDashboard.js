import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FeaturedProducts from './FeaturedProducts';

const apiUrl = 'https://66d384e0184dce1713d0607f.mockapi.io/product/product';

const ProductDashboard = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: '', oldprice: '', price: '', img: '' });
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(apiUrl);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products', error);
      }
    };
    fetchProducts();
  }, []);

  function showToast(message) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.classList.add("show");
  
    setTimeout(() => {
      toast.classList.remove("show");
    }, 3000); // Hide after 3 seconds
  }

  

  const handleAddProduct = async () => {
    try {
      const response = await axios.post(apiUrl, newProduct);
      setProducts([...products, response.data]);
      setNewProduct({ name: '', oldprice: '', price: '', img: '' });
            showToast('Product added successfully!');
    } catch (error) {
      console.error('Error adding product', error.response || error.message);
        showToast(`Error: ${error.response ? error.response.data : error.message}`);
    }
  };
  

  const handleEditProduct = async () => {
    if (!editingProduct.name || !editingProduct.img) {
      showToast('Please enter both the name and upload an image.');
      return;
    }
  
    try {
      const response = await axios.put(`${apiUrl}/${editingProduct.id}`, editingProduct);
      setProducts(products.map(p => p.id === editingProduct.id ? response.data : p));
      setEditingProduct(null);
            showToast('Product updated successfully!');
    } catch (error) {
      console.error('Error updating product', error);
            showToast(`Error: ${error.response ? error.response.data : error.message}`);
    }
  };
  
  const handleDeleteProduct = async (id) => {
    try {
      await axios.delete(`${apiUrl}/${id}`);
      setProducts(products.filter(p => p.id !== id));
            showToast('Product deleted successfully!');
    } catch (error) {
      console.error('Error deleting product', error);
            showToast(`Error: ${error.response ? error.response.data : error.message}`);
    }
  };
  
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
  
    reader.onloadend = () => {
      if (editingProduct) {
        setEditingProduct({ ...editingProduct, img: reader.result });
      } else {
        setNewProduct({ ...newProduct, img: reader.result });
      }
    };
  
    if (file) {
      reader.readAsDataURL(file);
    }
  };
  
  return (
    <div className="container">

      <div className='text-center pt-lg-5 '>
        
        <input
        className='mx-lg-2'
          type="text"
          value={editingProduct ? editingProduct.name : newProduct.name}
          onChange={(e) => (editingProduct ? setEditingProduct({ ...editingProduct, name: e.target.value }) : setNewProduct({ ...newProduct, name: e.target.value }))}
          placeholder="Name" 
        />
        <input
          className='mx-lg-2'
          type="text"
          value={editingProduct ? editingProduct.oldprice : newProduct.oldprice}
          onChange={(e) => (editingProduct ? setEditingProduct({ ...editingProduct, oldprice: e.target.value }) : setNewProduct({ ...newProduct, oldprice: e.target.value }))}
          placeholder="Old Price"
        />
        <input
          className='mx-lg-2'
          type="text"
          value={editingProduct ? editingProduct.price : newProduct.price}
          onChange={(e) => (editingProduct ? setEditingProduct({ ...editingProduct, price: e.target.value }) : setNewProduct({ ...newProduct, price: e.target.value }))}
          placeholder="Price"
        />
        <input
          className='mx-lg-2'
          type="file"
          onChange={handleImageChange}
        />
        <button onClick={editingProduct ? handleEditProduct : handleAddProduct} className='dashbtn'>
          {editingProduct ? 'Update Product' : 'Add Product'}
        </button>
      </div>

      <div className="row mt-lg-5">
        {products.map(product => (
          <div key={product.id} className="col-lg-3 col-md-4 col-sm-6">
            <div className="product-card">
              <img src={product.img} alt={product.name} className="img-fluid" />
              <h4>{product.name}</h4>
              <p> Old Price:  {product.oldprice}</p>
              <p> Price:  {product.price}</p>
              <button className='editebtn' onClick={() => setEditingProduct(product)}>Edit</button>
              <button className='deletebtn' onClick={() => handleDeleteProduct(product.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDashboard;