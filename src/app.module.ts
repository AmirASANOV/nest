import { Module } from "@nestjs/common";

import { SequelizeModule } from "@nestjs/sequelize";
import { UsersModule } from "./users/users.module";
import { ConfigModule } from "@nestjs/config";
import { config } from "dotenv";
import { User } from "./users/user.model";

config();

@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
      isGlobal: true,
    }),
    SequelizeModule.forRoot({
      dialect: "postgres",

      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,

      // host: "localhost",
      // port: 5432,
      // username: "postgres",
      // password: "root",
      // database: "nest-course",

      models: [User],
      autoLoadModels: true,
    }),
    UsersModule,
  ],
})
export class AppModule {}
