import React from 'react';
import { useState } from 'react';

const StorageLocalForm = () => {
  const [name, setName] = useState('');
  const [pwd, setPwd] = useState('');

  const handle = () => {
    localStorage.setItem('Name', name);
    localStorage.setItem('Password', pwd);
  };
  const remove = () => {
    localStorage.removeItem('Name');
    localStorage.removeItem('Password');
  };

  return (
    <div>
      <h2>Exemple use Local Storage</h2>
      <h3>Name of the user:</h3>
      <input
        placeholder="Name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h3>Password of the user:</h3>
      <input
        type="password"
        placeholder="Password"
        value={pwd}
        onChange={(e) => setPwd(e.target.value)}
      />
      <div>
        <button className="button success" onClick={handle}>
          Done
        </button>
      </div>
      <div style={{ padding: '10px' }}>
        {localStorage.getItem('Name') && (
          <div>
            Name: <p>{localStorage.getItem('Name')}</p>
          </div>
        )}
        {localStorage.getItem('Password') && (
          <div>
            Password: <p>{localStorage.getItem('Password')}</p>
          </div>
        )}
      </div>
      <div>
        <button className="button danger" onClick={remove}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default StorageLocalForm;
