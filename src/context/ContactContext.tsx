import React, {createContext, useState, useContext} from 'react';
import api from 'services/api';

const ContactContext = createContext({});

export const ContactProvider = ({children}: any) => {
  const [contacts, setContacts] = useState<[]>([]);
  const [contactDetail, setContactDetail] = useState<{}>({});

  const getContacts = () => {
    api
      .getContacts()
      .then((response: any) => {
        setContacts(response.data);
      })
      .catch((err: any) => {
        console.log('err', err);
      });
  };

  const getDetailContact = (id: String) => {
    api
      .getDetail(id)
      .then((response: any) => {
        setContactDetail(response.data);
      })
      .catch((err: any) => {
        console.log(err);
      });
  };

  const createContact = (data: any) => {
    api
      .createContact(data)
      .then((response: any) => {
        getContacts();
      })
      .catch((err: any) => {
        console.log('err', err);
      });
  };

  const updateContact = (id: String, data: any) => {
    api
      .updateContact(id, data)
      .then(response => {
        getDetailContact(id);
      })
      .catch((err: any) => {
        console.log(err);
      });
  };

  const deleteContact = (id: String) => {
    api
      .deleteContact(id)
      .then((response: any) => {
        getContacts();
      })
      .catch((err: any) => {
        console.log(err);
      });
  };

  return (
    <ContactContext.Provider
      value={{
        contacts,
        setContacts,
        getContacts,
        getDetailContact,
        createContact,
        updateContact,
        deleteContact,
      }}>
      {children}
    </ContactContext.Provider>
  );
};

export const useContact = () => {
  return useContext(ContactContext);
};
