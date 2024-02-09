import { RolesService } from "./../roles/roles.service";
import { Injectable } from "@nestjs/common";
import { User } from "./users.model";
import { InjectModel } from "@nestjs/sequelize";
import { CreateUserDto } from "./dto/create-user.dto";
import { Role } from "src/roles/roles.model";

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private userRepository: typeof User,
    private rolesService: RolesService
  ) {}

  async createUser(dto: CreateUserDto) {
    const user = await this.userRepository.create(dto);
    const role = await this.rolesService.getRoleByValue("USER");
    await user.$set("roles", [role.id]);
    return user;
  }
  async getAllUser() {
    const users = await this.userRepository.findAll({ include: { all: true } });

    // const users = await this.userRepository.findAll();
    return users;
  }
}
