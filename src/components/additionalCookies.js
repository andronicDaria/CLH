import React from 'react';
import CookieConsent from 'react-cookie-consent';

function AdditionalCookies() {
  return (
    <CookieConsent
      location="bottom"
      style={{ background: '#000', textAlign: 'center' }}
      buttonStyle={{ color: '#000', background: '#fff', fontSize: '18px' }}
      expires={365}
    >
      This site uses cookies. See our
      <a href="/privacy"> privacy policy </a>
      for more.
    </CookieConsent>
  );
}

export default AdditionalCookies;
