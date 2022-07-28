import React from 'react';

const HistoryApi = () => {
  const handlerBack2Page = () => {
    window.history.go(-2);
  };

  const handlerBack = () => {
    window.history.back();
  };

  const handlerForward = () => {
    window.history.go(1);
  };

  return (
    <div>
      <h2>History API</h2>
      <div style={{ padding: '10px' }}>
        <button className="button page" onClick={handlerBack2Page}>
          Go back 2 page
        </button>
        <button className="button page" onClick={handlerBack}>
          Go back page
        </button>
        <button className="button page" onClick={handlerForward}>
          Go next page
        </button>
      </div>
    </div>
  );
};

export default HistoryApi;
