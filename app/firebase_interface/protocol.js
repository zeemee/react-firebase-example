import {
  ref,
  firebasePathValue,
  firebasePathPush,
} from './helpers';
import firebase from 'firebase';

export function sendMessage(firebaseApp, messageText) {
  let message = {
    messageText,
    timestamp: firebase.database.ServerValue.TIMESTAMP,
  };

  return firebasePathPush(firebaseApp, '/messages', message);
}

export function listenToMessages(firebaseApp, snapshotListener, limit = 10) {
  return ref(firebaseApp, '/messages')
    .orderByChild('timestamp')
    .limitToLast(limit)
    .on('value', snapshotListener);
}
