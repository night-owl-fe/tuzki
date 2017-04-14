import Router from 'koa-router'
import api, { jsonp } from './controller/api'

const router = new Router()

router.get('/api', api);
router.get('/api/jsonp', jsonp);

export default router

