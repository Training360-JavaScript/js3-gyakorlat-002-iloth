// const setCookie = (string = '') => {
//   const exp = new Date();
//   exp.setTime(exp.getTime() + (15 * 60 * 1000));

//   document.cookie = `token=${string};expires=${exp.toUTCString()}`;
// };

const cookieHandler = {
  setCookie(name, value, expireMinutes = 15, path = '/') {
    const exp = new Date();
    exp.setTime(exp.getTime() + (expireMinutes * 60 * 1000));

    document.cookie = `${name}=${value};expires=${exp.toUTCString()};path=${path}`;
  },
  getAll() {
    const cookies = document.cookie.split(';');
    const ret = {};
    cookies.forEach((item) => {
      const pair = item.split('=');
      const key = pair[0].trim();
      const value = pair[1].trim();

      ret[key] = value;
    });

    return ret;
  },
  flush() {
    for (let prop in this.getAll()) {
      setCookie(prop, '', -1);
    }
  },
  toSessionStorage() {
    const cookies = this.getAll();
    for (let prop in cookies) {
      sessionStorage.setItem(prop, cookies[prop]);
    }
  },
};

cookieHandler.setCookie('viewed', '5');
cookieHandler.setCookie('uid', '354774631237');
cookieHandler.setCookie('ssid', 'Bx55OWbHJ0Vt_IGIF');

export {
  cookieHandler
};