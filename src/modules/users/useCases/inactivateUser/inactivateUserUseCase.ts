import { AppError } from "@helpers/errorsHandler";
import { AppResponse } from "@helpers/responseParser";
import { IUsersRepositories } from "@modules/users/iRepositories/IUsersRepositories";
import { IUuidProvider } from "@shared/container/providers/uuidProvider/IUuidProvider";
import { inject, injectable } from "tsyringe";

interface IRequest {
  id: string;
}
@injectable()
class InactivateUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUsersRepositories,
    @inject("UuidProvider")
    private uuidProvider: IUuidProvider
  ) {}

  async execute({ id }: IRequest): Promise<AppResponse> {
    if (!this.uuidProvider.validateUUID(id)) {
      throw new AppError({
        message: "ID inválido!",
      });
    }
    const listUserById = await this.userRepository.listById(id);
    if (!listUserById) {
      throw new AppError({
        message: "Usuário não encontrado!",
      });
    }
    await this.userRepository.inactivate(id, false);

    return new AppResponse({
      message: "Desativação bem sucedida!",
    });
  }
}

export { InactivateUserUseCase };
