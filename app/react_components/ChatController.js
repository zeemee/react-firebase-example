/**
 * These is the implementation of "Firebase Listeners" from the slideshow
 */

import React from 'react';
import { connect } from 'react-redux';
import FirebaseAdapter from '../firebaseAdapterInstance';
import { saveMessages } from '../redux_actions/saveMessages';

class ChatController extends React.Component {
  constructor(props) {
    super(props);
    this.onReceiveMessages = this.onReceiveMessages.bind(this);
  }

  componentWillMount() {
    FirebaseAdapter.listenToMessages(this.onReceiveMessages);
  }

  onReceiveMessages(messages) {
    this.props.dispatch(saveMessages(messages))
  }

  render() {
    return null
  }
}

export default connect()(ChatController);
