const SIX_CITIES_AUTH_TOKEN_NAME = 'six-cities-auth-token';

export type TokenType = string;

export const getToken = ():TokenType => {
  const token = localStorage.getItem(SIX_CITIES_AUTH_TOKEN_NAME);
  return token ?? '';
};

export const saveToken = (token: TokenType): void => {
  localStorage.setItem(SIX_CITIES_AUTH_TOKEN_NAME, token);
};

export const dropToken = (): void => {
  localStorage.removeItem(SIX_CITIES_AUTH_TOKEN_NAME);
};
