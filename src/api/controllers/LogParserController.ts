import LogParserService from '@api/services/LogParserService';
import logger from '@shared/logger';
import { Request, Response } from 'express';

export default class LogParserController {
  public async parse(request: Request, response: Response): Promise<Response> {
    logger.debug('Request parse quase log')

    const service = new LogParserService()

    const {buffer, log} = await service.execute({ file: request.file.path })
    
    logger.info('Response parse quase log')

    response.attachment('invoice.pdf')
    response.end(buffer);

    return response.json(log)
  }
}