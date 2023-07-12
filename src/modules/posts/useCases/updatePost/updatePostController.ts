import { IRequestUpdatePost } from "@modules/posts/dtos/posts";
import { Request, Response } from "express";
import { UpdatePostUseCase } from "@modules/posts/useCases/updatePost/updatePostUseCase";
import { container } from "tsyringe";

class UpdatePostcontroller {
  async handle(req: Request, res: Response) {
    const { usrId } = req;
    const { id } = req.params as { id: string };
    const { content, tags, visibility } = req.body as IRequestUpdatePost;

    const updatePostUseCase = container.resolve(UpdatePostUseCase);

    const result = await updatePostUseCase.execute({
      usrId,
      id,
      content,
      tags,
      visibility,
    });

    return res.status(result.statusCode).json(result);
  }
}

export { UpdatePostcontroller };
