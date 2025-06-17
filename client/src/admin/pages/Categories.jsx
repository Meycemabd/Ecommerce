import React, { useState, useEffect } from 'react';
import { FiPlus, FiEdit2, FiTrash2 } from 'react-icons/fi';
import { toast, ToastContainer } from 'react-toastify';
import '../Styles/Categories.css';

export default function CategoriesPage() {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editValue, setEditValue] = useState('');

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = () => {
    const storedCategories = JSON.parse(localStorage.getItem('categories')) || [];
    setCategories(storedCategories);
  };

  const handleAddCategory = (e) => {
    e.preventDefault();
    if (!newCategory.trim()) {
      toast.error('Category name cannot be empty');
      return;
    }

    const categoryExists = categories.some(
      cat => cat.name.toLowerCase() === newCategory.trim().toLowerCase()
    );

    if (categoryExists) {
      toast.error('Category already exists');
      return;
    }

    const category = {
      id: Date.now().toString(),
      name: newCategory.trim(),
      createdAt: new Date().toISOString()
    };

    const updatedCategories = [...categories, category];
    setCategories(updatedCategories);
    localStorage.setItem('categories', JSON.stringify(updatedCategories));
    setNewCategory('');
    toast.success('Category added successfully');
  };

  const handleDelete = (id) => {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const category = categories.find(cat => cat.id === id);
    
    if (products.some(product => product.category === category.name)) {
      toast.error('Cannot delete category with existing products');
      return;
    }

    const updatedCategories = categories.filter(cat => cat.id !== id);
    setCategories(updatedCategories);
    localStorage.setItem('categories', JSON.stringify(updatedCategories));
    toast.success('Category deleted successfully');
  };

  const handleEdit = (id) => {
    setEditingId(id);
    const category = categories.find(cat => cat.id === id);
    setEditValue(category.name);
  };

  const handleSaveEdit = (id) => {
    if (!editValue.trim()) {
      toast.error('Category name cannot be empty');
      return;
    }

    const updatedCategories = categories.map(cat =>
      cat.id === id ? { ...cat, name: editValue.trim() } : cat
    );

    setCategories(updatedCategories);
    localStorage.setItem('categories', JSON.stringify(updatedCategories));
    setEditingId(null);
    setEditValue('');
    toast.success('Category updated successfully');
  };

  return (
    <div className="categories-container">
      <ToastContainer />
      <div className="categories-header">
        <h2>Categories</h2>
        <form onSubmit={handleAddCategory} className="category-add-form">
          <input
            type="text"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            placeholder="New category name"
            className="category-input"
          />
          <button type="submit" className="add-category-btn">
            <FiPlus /> Add Category
          </button>
        </form>
      </div>

      <div className="categories-table-wrapper">
        <table className="categories-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Created Date</th>
              <th>Products</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map(category => (
              <tr key={category.id}>
                <td>
                  {editingId === category.id ? (
                    <input
                      type="text"
                      value={editValue}
                      onChange={(e) => setEditValue(e.target.value)}
                      className="edit-input"
                      autoFocus
                      onBlur={() => handleSaveEdit(category.id)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSaveEdit(category.id)}
                    />
                  ) : (
                    category.name
                  )}
                </td>
                <td>{new Date(category.createdAt).toLocaleDateString()}</td>
                <td>{getProductCount(category.name)}</td>
                <td>
                  <div className="action-buttons">
                    <button className="action-btn edit" onClick={() => handleEdit(category.id)}>
                      <FiEdit2 />
                    </button>
                    <button className="action-btn delete" onClick={() => handleDelete(category.id)}>
                      <FiTrash2 />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}