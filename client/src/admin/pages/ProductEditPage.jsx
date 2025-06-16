import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FiSave, FiX, FiUpload } from 'react-icons/fi';
import '../Styles/ProductEditPage.css';

const CATEGORY_OPTIONS = [
  "Women", "Men", "Shoes", "Accessories", "Sale", "Kids", "New Arrivals",
  "Sportswear", "Denim", "Outerwear", "Basics", "Luxury", "Casual", "Formal",
  "Swimwear", "Lingerie", "Activewear", "Plus Size", "Petite", "Maternity"
];

export default function ProductEditPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const [product, setProduct] = useState({
    title: '',
    category: '',
    price: '',
    description: '',
    imageFile: ''
  });

  const [dragActive, setDragActive] = useState(false);

  useEffect(() => {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const foundProduct = products.find(p => p.id === id);
    if (foundProduct) {
      setProduct(foundProduct);
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const updatedProducts = products.map(p =>
      p.id === id ? { ...product, id } : p
    );
    localStorage.setItem('products', JSON.stringify(updatedProducts));
    navigate('/admin/products');
  };

  const handleImageChange = (file) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setProduct(prev => ({ ...prev, imageFile: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    handleImageChange(file);
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleImageChange(e.dataTransfer.files[0]);
    }
  };

  return (
    <div className="product-edit-container">
      <div className="edit-header">
        <h2>Edit Product</h2>
        <div className="header-actions">
          <button className="cancel-btn" onClick={() => navigate('/admin/products')}>
            <FiX /> Cancel
          </button>
          <button className="save-btn" onClick={handleSubmit}>
            <FiSave /> Save
          </button>
        </div>
      </div>

      <form className="edit-form" onSubmit={handleSubmit}>

        <div className="form-group">
          <label>Product Title</label>
          <input
            type="text"
            value={product.title}
            onChange={e => setProduct({ ...product, title: e.target.value })}
            placeholder="Enter product title"
            required
          />
        </div>

        <div className="form-group">
          <label>Category</label>
          <input
            list="categories-list"
            value={product.category}
            onChange={e => setProduct({ ...product, category: e.target.value })}
            placeholder="Start typing or select category"
            required
            autoComplete="off"
          />
          <datalist id="categories-list">
            {CATEGORY_OPTIONS.map(cat => (
              <option key={cat} value={cat} />
            ))}
          </datalist>
        </div>

        <div className="form-group">
          <label>Price (€)</label>
          <input
            type="number"
            step="0.01"
            value={product.price}
            onChange={e => setProduct({ ...product, price: e.target.value })}
            placeholder="e.g. 59.99"
            required
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            value={product.description}
            onChange={e => setProduct({ ...product, description: e.target.value })}
            rows="5"
            placeholder="Describe the product..."
          />
        </div>

        <div className="form-group">
          <label>Product Image</label>

          <div
            className={`drag-drop-area ${dragActive ? 'active' : ''}`}
            onDragEnter={handleDrag}
            onDragOver={handleDrag}
            onDragLeave={handleDrag}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current && fileInputRef.current.click()}
          >
            {product.imageFile ? (
              <img src={product.imageFile} alt="Preview" className="drag-drop-preview" />
            ) : (
              <p>Drag & Drop image here, or click to upload</p>
            )}
          </div>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileInputChange}
            style={{ display: 'none' }}
          />
        </div>

      </form>
    </div>
  );
}
