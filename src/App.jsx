import React, { useState } from 'react';

import { UserContext } from './auth/authContext';
import {Router} from './components/router';

function App() {
  const [isLoggin, setLoggin] = useState(false);

  return (
    <div className="flex max-w-lg mx-auto">
      <UserContext.Provider
        value={{ isLoggin, setLoggin }}
        isAuthenticated={isLoggin}
      >
        <Router />
      </UserContext.Provider>
    </div>
  );
}

export default App;
