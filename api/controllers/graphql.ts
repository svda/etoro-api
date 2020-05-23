import { validationError } from '../../lib/error.ts'
import logger from '../../lib/logging.ts'
import { querySchema } from '../repositories/etoro.ts'

interface Context {
  request: any
  params: any
  response: any
}

export const postGraphQL = async ({ request, response }: Context): Promise<void> => {
  try {
    const { type, value } = await request.body()

    logger.debug('postGraphQL', type, value)

    if (type !== 'json') {
      return validationError(response, `Invalid body type: '${type}'.`)
    }

    const { query } = value
    if (!query) {
      return validationError(response, `Missing required parameter: 'query'.`)
    }

    const result = await querySchema(`${query}`)
    response.body = result
  } catch (error) {
    logger.error(JSON.stringify(error))
  }
}
