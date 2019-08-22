class SACFirebase {
  init(db, auth) {
    this.db = db;
    this.auth = auth;
  }

  load(path, success, failure) {
    return new Promise((resolve, reject) => {
      this.db.ref(path)['once']('value', snap => {
        const result = snap.val();
        if (typeof (success) === 'function') success(result);
        resolve(result);
      }, (error) => {
        if (typeof (failure) === 'function') failure(error);
        reject(error);
        console.log(error);
      })
    })
  };

  update(updates, success, failure) {
    return this.db.ref().update(updates, error => {
      if (error) {
        if (typeof (success) === 'function') failure(error);
      }
      else {
        if (typeof (success) === 'function') success(failure);
      }
    })
  };

  getUser(uid, success) {
    return this.load(`users/${uid}`, success);
  }
}

const Fire = new SACFirebase();

export default Fire;