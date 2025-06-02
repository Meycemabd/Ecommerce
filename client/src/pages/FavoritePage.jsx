import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeFromFavorites } from '../redux/favoritesSlice';
import { addToCart } from '../redux/cartSlice';
import '../styles/pagesCSS/FavoritePage.css';

export default function FavoritePage() {
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const handleAddToCart = (item) => {
    dispatch(addToCart({ ...item, quantity: 1 }));  // ✅ quantity hinzufügen
    dispatch(removeFromFavorites(item.id)); 
    navigate('/cart');                 
  };

  return (
    <div className="favorite-page container">
      <h2 className="wishlist-title" style={{
        letterSpacing: "3px",
        color: "#e50010",
        fontFamily: "Arial, sans-serif",
        width: "100%",
      }}>
        Your Wishlist
      </h2>

      {favorites.length === 0 ? (
        <div className="empty-message">
          <p>No favorite items saved yet.</p>
          <a href="/products" className="btn btn-outline-dark">Start Shopping</a>
        </div>
      ) : (
        <ul className="wishlist-list">
          {favorites.map((item) => (
            <li className="wishlist-item" key={item.id}>
              <img src={item.image} alt={item.title} className="wishlist-img" />
              <div className="wishlist-info">
                <h5 className="wishlist-name">{item.title}</h5>
                <p className="wishlist-price">€ {item.price}</p>
                <div className="wishlist-actions">
                  <button
                    className="btn btn-dark btn-sm"
                    onClick={() => handleAddToCart(item)}
                  >
                    Add to Cart
                  </button>
                  <button
                    className="btn btn-link text-danger btn-sm"
                    onClick={() => dispatch(removeFromFavorites(item.id))}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
