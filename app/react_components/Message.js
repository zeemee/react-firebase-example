import React from 'react';
import ReactDOM from 'react-dom';

const styles = {
  messageContainer: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 10,
    width: '250px',
    height: '30px',
    borderRadius: 5,
    margin: '2px 0',
    overflow: 'hidden',
  }
}

const backgroundColors = [
  '#ece9f8',
  '#ffedf2',
  '#ffedfb',
  '#faedff',
  '#e2fbf0',
  '#f0f8ff',
];

const Message = ({messageText}) => {
  let predictablyRandomNumber = (messageText.charCodeAt(0) + messageText.charCodeAt(messageText.length - 1)) % 5;  
  let randomBackgroundColor = backgroundColors[predictablyRandomNumber] || backgroundColors[0];

  return (
    <div style={Object.assign({}, styles.messageContainer, {'backgroundColor': randomBackgroundColor})}>
      <span>{messageText}</span>
    </div>
  )
}

export default Message;
