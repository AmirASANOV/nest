import { UserRoles } from "./../roles/user-roles.model";
import { SequelizeModule } from "@nestjs/sequelize";
import { Module } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";
import { User } from "./user.model";
import { Role } from "src/roles/roles.model";

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [SequelizeModule.forFeature([User, Role, UserRoles])],
})
export class UsersModule {}
