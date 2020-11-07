import { useEffect, useState } from 'react';
import store from 'store';
import storeKeys from '../assets/storeKeys';
import { checkValidToken } from '../logic-operations/Api';

const IsLoggedIn = () => {
// get from redux variable store.get(storeKeys.SET_LOGIN)
  const [isLoggedIn, setIsLoggedIn] = useState(store.get(storeKeys.SET_LOGIN));
  useEffect(() => {
    const token = store.get(storeKeys.TOKEN_VAR);
    if (token) {
      checkValidToken(token).then(response => {
        if (response.status === 200) setIsLoggedIn(true);
        else setIsLoggedIn(false);
      });
    } else setIsLoggedIn(false);
  }, []);
  return isLoggedIn;
};

export default IsLoggedIn;
