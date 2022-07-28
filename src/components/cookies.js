import React from 'react';
import { useCookies } from 'react-cookie';

function CookiesForm() {
  const [cookies, setCookie] = useCookies(['user']);

  const handleCookie = () => {
    setCookie('user', 'Daria', {
      path: '/',
    });
  };

  return (
    <div>
      <h2>Exemple use Cookies</h2>
      <h3>Click for add cookies</h3>
      <button className="button cookie" onClick={handleCookie}>
        Set Cookie
      </button>
      <h4>User on name:</h4>
      <h4>{cookies.user && <p>{cookies.user}</p>}</h4>
    </div>
  );
}

export default CookiesForm;
