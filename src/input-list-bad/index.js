import React, { useState } from 'react';
import List from './list';
import Helper from '../helper';
import './input-list.css';

function InputList({ slow }) {
  const [text, setText] = useState('');
  const [products, setProducts] = useState([]);
  React.useEffect(() => {
    Helper.fetchAllProductsWithoutSuspense().then(({ data }) => setProducts(data));
  }, []);

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <div>
      <input
        className="search__input"
        value={text}
        autoFocus
        placeholder="Buscar..."
        onChange={handleChange}
      />

      <List searchText={text} data={products} slow={slow} />
    </div>
  );
}

export default InputList;
