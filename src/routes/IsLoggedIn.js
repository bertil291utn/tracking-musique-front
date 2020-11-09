import { useEffect, useState } from 'react';
import store from 'store';
import storeKeys from '../assets/storeKeys';
import { checkValidToken } from '../logic-operations/Api';

const IsLoggedIn = () => {
  const tokenVar = !!store.get(storeKeys.TOKEN_VAR);
  const [checkLogin, setCheckLogin] = useState({ login: tokenVar, data: {} });
  useEffect(() => {
    const token = store.get(storeKeys.TOKEN_VAR);
    if (token) {
      checkValidToken(token).then(response => {
        if (response.status === 200) setCheckLogin({ data: response.data, login: true });
        else { setCheckLogin({ ...checkLogin, login: false }); store.remove(storeKeys.TOKEN_VAR); }
      });
    } else setCheckLogin({ ...checkLogin, login: false });
  }, []);
  return checkLogin;
};

export default IsLoggedIn;
