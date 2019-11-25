import React, { Suspense, useEffect, useState } from 'react';
import Helper from '../../../helper';
import CommentsLength from './comments-length';
import './list-item.css';

export default function ListItem({ item, slow, productIndex }) {
  Helper.applySlowPerformance(slow);
  const [commentResponse, setCommentResponse] = useState([]);
  const getFormattedPrice = (number, currencyRaw) => {
    let currency = currencyRaw.split(' ')[0];
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency
    }).format(number);
  };

  useEffect(() => {
    //TODO: Remover parâmetro "true" - irá transformar a promise na interface que utilizamos no suspense
    setCommentResponse(
      Helper.callPromiseWithTimeout(item.comments, `fetching comments ${productIndex}`, true)
    );
  }, []);

  return (
    <li className="list-item">
      <span className="list-item__content">
        <div className="list-item__img-container">
          <img
            className="list-item__img"
            src={`${item.image}?text=${item.category}`}
            alt="product picture"
          />
        </div>
        <div className="list-item__text">
          <span className="list-item__hat">{item.category}</span>
          <h3 className="list-item__head">{item.name}</h3>
          {
            //TODO: Colocar Suspense
          }
          <CommentsLength comments={commentResponse} />
          <div className="list-item__sub">{getFormattedPrice(item.price, item.currency)}</div>
        </div>
      </span>
    </li>
  );
}
