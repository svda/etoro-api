import { Router } from 'https://deno.land/x/oak/mod.ts'

import { postGraphQL } from './controllers/graphql.ts'

const router = new Router()

router.post('/graphql', postGraphQL)

export default router
