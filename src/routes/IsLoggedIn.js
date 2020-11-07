import { useEffect, useState } from 'react';
import store from 'store';
import storeKeys from '../assets/storeKeys';
import { checkValidToken } from '../logic-operations/Api';

const IsLoggedIn = () => {
  // get from redux variable store.get(storeKeys.SET_LOGIN)
  const tokenVar = !!store.get(storeKeys.TOKEN_VAR);
  const [checkLogin, setCheckLogin] = useState({ login: tokenVar, data: {} });
  useEffect(() => {
    const token = store.get(storeKeys.TOKEN_VAR);
    if (token) {
      checkValidToken(token).then(response => {
        if (response.status === 200) setCheckLogin({ data: response.data, login: true });
        else setCheckLogin({ ...checkLogin, login: false });
      });
    } else setCheckLogin({ ...checkLogin, login: false });
  }, []);
  return checkLogin;
};

export default IsLoggedIn;
