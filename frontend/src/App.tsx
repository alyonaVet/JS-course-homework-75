import AddMessage from './components/AddMessage/AddMessage';
import {Box} from '@mui/material';
import React, {useState} from 'react';
import axiosApi from './axiosApi';
import {CipherMessageType} from './types';

const App = () => {
  const [state, setState] = useState<CipherMessageType>({
    message: '',
    cipherMessage: '',
    password: '',
  });


  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleEncode = async () => {
    if (state.password) {
      try {
        const {data: textMessage} = await axiosApi.post('/encode', {
          message: state.message,
          password: state.password,
        });
        setState(prevState => ({
          ...prevState,
          cipherMessage: textMessage.encoded,
        }));
      } catch (error) {
        console.error('Error encoding:', error);
      }
    } else {
      alert('Enter a password to encode the message!');
    }
  };

  const handleDecode = async () => {
    if (state.password) {
      try {
        const {data: textCipher} = await axiosApi.post('/decode', {
          message: state.cipherMessage,
          password: state.password,
        });

        setState(prevState => ({
          ...prevState,
          message: textCipher.decoded,
        }));
      } catch (error) {
        console.error('Error decoding:', error);
      }
    } else {
      alert('Enter a password to decode the message!');
    }
  };

    return (
        <Box my={4} mx={4} p={2}>
            <AddMessage
              message={state.message}
              cipherMessage={state.cipherMessage}
              password={state.password}
              onFieldChange={inputChangeHandler}
              onEncode={handleEncode}
              onDecode={handleDecode}
            />
        </Box>
    )
};

export default App;
