import { logParser } from '@shared/helpers/LogParser';
import AppError from '../errors/AppError';

import Log from '@shared/types/Log';

import { compileTemplate } from '@shared/pdf/compileTemplate';
import { generatePdf } from '@shared/pdf/generate';

interface IRequest {
  file: string;
}

interface IResponse {
  log: Log,
  buffer: Buffer
}

class LogParserService {
  public async execute({ file }: IRequest): Promise<IResponse> {

    if (!file) {
      throw new AppError('Error reading the file');
    }

    const log = logParser(file)

    const buffer = await generatePdf(log)

    return {buffer, log}
  }
}

export default LogParserService;