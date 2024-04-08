import { Request, Response } from 'express';

export default class OrdersController {
  public async parse(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    return response.json({id});
  }
}