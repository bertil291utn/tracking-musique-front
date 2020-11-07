import { useEffect, useState } from 'react';
import store from 'store';
import storeKeys from '../assets/storeKeys';
import { checkValidToken } from '../logic-operations/Api';

const IsLoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const token = store.get(storeKeys.TOKEN_VAR);
    if (token) {
      checkValidToken(token).then(response => {
        if (response.status === 200) setIsLoggedIn(true);
      });
    }
  }, []);
  return isLoggedIn;
};

export default IsLoggedIn;
