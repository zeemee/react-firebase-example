import * as protocol from './protocol';

export default class Adapter {
  constructor(firebaseApp) {
    this._firebaseApp = firebaseApp;
  }

  sendMessage(messageText) {
    return protocol.sendMessage(
      this._firebaseApp,
      messageText
    );
  }

  listenToMessages(onReceiveMessages) {
    // a different app's adapter might use the protocol's listenToMessages, but
    // do different post-processing on the snapshot
    const snapshotListener = snapshot => {
      let messagesObj = snapshot.val();
      let messages = Object.keys(messagesObj).map(key => messagesObj[key]);
      onReceiveMessages(messages);
    }

    return protocol.listenToMessages(
      this._firebaseApp,
      snapshotListener,
    );
  }
}
