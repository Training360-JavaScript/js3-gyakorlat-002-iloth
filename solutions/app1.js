const setCookie = (string = '') => {
  const exp = new Date();
  exp.setTime(exp.getTime() + (15 * 60 * 1000));

  document.cookie = `token=${string};expires=${exp.toUTCString()}`;
};

export default setCookie;
