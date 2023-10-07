import React, {createContext, useState, useContext} from 'react';

const ContactContext = createContext({});

export const ContactProvider = ({children}: any) => {
  const [contacts, setContacts] = useState<[]>([]); // Your user configuration state

  console.log('contact context', contacts);

  return (
    <ContactContext.Provider value={{contacts, setContacts}}>
      {children}
    </ContactContext.Provider>
  );
};

export const useContact = () => {
  return useContext(ContactContext);
};
