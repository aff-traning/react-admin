import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const isAuthenticated = (authState) => {
  authState = authState ?? cookies.get('authState');
  return authState && authState.accessToken ? true : false;
}

export const setAuthCookie = (tokenInfo) => {
  const cookieExpire = new Date();
  cookieExpire.setSeconds(cookieExpire.getSeconds() + parseInt(tokenInfo.expiresIn, 10));
  cookies.set('authState', { ...tokenInfo }, { path: '/', expires: cookieExpire });
}

export const getAuthToken = () => {
  const authState = cookies.get('authState');

  return `${authState.tokenType} ${authState.accessToken}`;
}