import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import ChatController from './ChatController';
import Message from './Message';
import FirebaseAdapter from '../firebaseAdapterInstance';

class ChatRoom extends React.Component {
  constructor(props) {
    super(props);
    this.onPressSend = this.onPressSend.bind(this);

    this.state = {
      messageToSend: '',
    }
  }

  onPressSend() {
    FirebaseAdapter.sendMessage(this.state.messageToSend);
    this.setState({ messageToSend: '' });
  }

  render() {
    return (
      <div>
        <h1>Anonymoose</h1>
        {this.props.messages.map((message, i) => (
          <Message key={i} messageText={message.messageText} />
        ))}
        <input
          type="text"
          value={this.state.messageToSend}
          onChange={e => this.setState({messageToSend: e.target.value})}
          style={{marginTop: 10, marginRight: 5}}
        />
        <button onClick={this.onPressSend}>send</button>
        {/* Content ends here */}
        <ChatController />
      </div>
    );
  }
}

const mapReduxStateToProps = (state) => {
  return {
    messages: state.messages,
  }
}

export default connect(mapReduxStateToProps)(ChatRoom);
