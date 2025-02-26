import { useState } from 'react';
import PropTypes from 'prop-types';

const Products = ({items}) => {
    const [showSecret, setShowSecret] = useState(false); 
    const [selectedItem, setSelectedItem] = useState(null);
    const filteredItems = items.filter(item =>
        Array.isArray(item.secret) ? item.secret.includes(showSecret) : item.secret === showSecret
      );       
      const toggleItem = (id) => {
        setSelectedItem(selectedItem === id ? null : id);
      };

      return (
        <div className="menu">
          <button onClick={() => setShowSecret(!showSecret)}>
            {showSecret ? "Show Regular Menu" : "Show Secret Menu"}
          </button>
    
          {filteredItems.map((item) => (
            <div key={item.id} className="menu-item">
              <button className="item-button" onClick={() => toggleItem(item.id)}>
                {item.name}
              </button>
              {selectedItem === item.id && (
                <div className="item-details">
                  <h2>{item.name}</h2>
                  <img src={item.img} alt={item.name} width="25%" />
                  <p>{item.description}</p>
                  <p><strong>Price:</strong> ${item.price.toFixed(2)}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      );
}

export default Products;