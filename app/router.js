import Router from 'koa-router'
import api, { admin } from './controller/api'
import view from './controller/view'

const router = new Router()

router.post('/api/search', api);

router.get('/view', view);
// router.post('/admin/setting/hasAlreadySetting', admin);

export default router

