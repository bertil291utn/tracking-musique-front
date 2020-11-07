import store from 'store';
import storeKeys from '../assets/storeKeys';
import { checkValidToken } from '../logic-operations/Api';

const IsLoggedIn = async () => {
  const token = store.get(storeKeys.TOKEN_VAR);
  if (token) {
    const response = await checkValidToken(token);
    if (response.status === 200) return true;
  }
  return false;
};

export default IsLoggedIn;
