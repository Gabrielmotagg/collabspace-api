import { IRequestCreateUser } from "../../dto/users";

class CreateUserUseCase {
  async execute({
    name,
    email,
    confirmEmail,
    password,
    confirmPassword,
    telephone,
    birthDate,
  }: IRequestCreateUser) {}
}

export { CreateUserUseCase };
