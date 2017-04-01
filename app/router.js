import Router from 'koa-router'
import api from './controller/api'

const router = new Router()

router.get('/api', api);

export default router

