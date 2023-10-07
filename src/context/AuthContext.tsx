import React, {createContext, useState, useContext} from 'react';

const AuthContext = createContext({});

export const AuthProvider = ({children}: any) => {
  const [userToken, setUserToken] = useState(null); // Your user configuration state
  const [isLoading, setIsLoading] = useState(true);

  console.log('auth context', userToken);

  return (
    <AuthContext.Provider
      value={{userToken, setUserToken, isLoading, setIsLoading}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
