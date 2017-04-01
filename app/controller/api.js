export default async (cxt, next) => {
  // cxt.body = 'hello'
  cxt.body = JSON.stringify({code: 2000, msg: 'ok'})
};