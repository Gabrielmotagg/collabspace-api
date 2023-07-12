import { Request, Response } from "express";
import { DeletePostUseCase } from "./deletePostUseCase";
import { container } from "tsyringe";

class DeletePostController {
  async handle(req: Request, res: Response) {
    const { usrId } = req;
    const { id } = req.params as { id: string };

    const deletePostUseCase = container.resolve(DeletePostUseCase);

    const result = await deletePostUseCase.execute({
      usrId,
      id,
    });

    return res.status(result.statusCode).json(result);
  }
}

export { DeletePostController };
