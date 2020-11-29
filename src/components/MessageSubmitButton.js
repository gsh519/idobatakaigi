import React from 'react';
import { IconButton } from '@material-ui/core/';
import SendIcon from '@material-ui/icons/Send';

import { pushMessage } from '../firebase';

const MessageSubmitButton = (props) => {
  const {name, text, setText, inputEl} = props;

  return (
    <IconButton disabled={text === ""} onClick={() => {
      pushMessage({name: 'はむさん', text})
      setText('')
      inputEl.current.focus();
    }}>
      <SendIcon />
    </IconButton>
  )
}

export default MessageSubmitButton;