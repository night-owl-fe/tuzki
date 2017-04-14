export default async (cxt, next) => {
  // cxt.body = 'hello'
  cxt.body = JSON.stringify({code: 2000, msg: 'ok'})
};

export async function jsonp (cxt, next) {
  // cxt.body = 'hello'
  console.log(cxt.query.callback)
  let callback = cxt.query.callback
  if (callback) {
    cxt.body = `${callback}(${JSON.stringify({code: 2000, msg: 'ok'})})`
  } else {
    cxt.body = JSON.stringify({code: fail, msg: '参数缺失'})
  }
};