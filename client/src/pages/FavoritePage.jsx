// FavoritePage.jsx
import { useSelector, useDispatch } from 'react-redux';
import { removeFromFavorites } from '../redux/favoritesSlice';
import '../styles/pagesCSS/FavoritePage.css'

export default function FavoritePage() {
  const favorites = useSelector(state => state.favorites);
  const dispatch = useDispatch();

  return (
    <div style={{ marginTop: "120px", minHeight: "500px" }}>
      <h1 className="text-center mb-4">Your Favorites</h1>
      <div className="container">
        {favorites.length === 0 ? (
          <p>No favorite items yet.</p>
        ) : (
          <div className="row">
            {favorites.map((item) => (
              <div className="col-md-4 mb-3" key={item.id}>
                <div className="card">
                  <img src={item.image} className="card-img-top" alt={item.title} />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">${item.price}</p>
                    <button
                      className="btn btn-danger"
                      onClick={() => dispatch(removeFromFavorites(item.id))}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
