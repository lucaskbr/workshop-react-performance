import React, { useEffect, useState } from 'react';
import Helper from '../../../../helper';

export default function CommentsLength({ comments, slow }) {
  Helper.applySlowPerformance(slow);

  const [state, setState] = useState([]);
  //TODO: Remover useEffect e utilizar interface read
  useEffect(() => {
    if (comments.then) {
      comments.then(setState);
    }
  }, [comments]);

  return (
    <span className="comment-length">
      <strong>{state.length}</strong> avaliaçōes
    </span>
  );
}
