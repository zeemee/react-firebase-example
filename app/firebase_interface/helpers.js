export function ref(firebaseApp, path) {
  return firebaseApp.database().ref(path);
}

export function firebasePathValue(firebaseApp, path) {
  return firebaseApp.database()
    .ref(path)
    .once('value')
    .then(snapshot => snapshot.val());
}

export function firebasePathPush(firebaseApp, path, value) {
  return firebaseApp.database()
    .ref(path)
    .push(value);
}
