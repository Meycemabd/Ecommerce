// src/utils/localStorageHelpers.js

const STORAGE_KEY = "admin_products";

export function getStoredProducts() {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
}

export function saveProduct(product) {
  const current = getStoredProducts();
  const newList = [...current, product];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(newList));
}
