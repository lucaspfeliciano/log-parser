import LogParserService from '@api/services/LogParserService';
import logger from '@shared/logger';
import { Request, Response } from 'express';

export default class LogParserController {
  public async parse(request: Request, response: Response): Promise<Response> {
    logger.debug('Request parse quase log')

    const service = new LogParserService()

    const parsed = await service.execute({ file: '' })
    
    logger.info('Response parse quase log')

    return response.json({ parsed });
  }
}