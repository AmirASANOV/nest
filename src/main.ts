import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function start() {
  const PORT = Number(process.env.PORT) || 9000;
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle("Lesson 123")
    .setDescription("Document rest api")
    .setVersion("2.3")
    .addTag("Linton")
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup("/api/docs", app, document);

  await app.listen(PORT, () => {
    console.log(`started on port: ${PORT}`);
  });
}

start();
