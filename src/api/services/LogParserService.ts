import AppError from '../errors/AppError';

interface IRequest {
  file: string;
}

class LogParserService {
  public async execute({ file }: IRequest): Promise<string> {

    if (!file) {
      throw new AppError('Error reading the file');
    }

    return file
  }
}

export default LogParserService;