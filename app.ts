import { Application } from 'https://deno.land/x/oak/mod.ts'

import logger from './lib/logging.ts'
import config from './config.ts'
import router from './api/routes.ts'

const app = new Application()
app.use(router.routes())
app.use(router.allowedMethods())

const port = config.port
logger.info(`Listening on port ${port}...`)
await app.listen({ port })
