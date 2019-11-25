import React, { useEffect, useState } from 'react';
import Helper from '../../../../helper';

export default function CommentsLength({ comments, slow }) {
  Helper.applySlowPerformance(slow);

  const [state, setState] = useState([]);
  useEffect(() => {
    if (comments.then) {
      comments.then(setState);
    }
  }, [comments]);
  return <span>Número de comentários {state.length}</span>;
}
