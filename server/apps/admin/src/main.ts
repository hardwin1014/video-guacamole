import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AdminModule } from './admin.module';

async function bootstrap() {
  const app = await NestFactory.create(AdminModule);

  const options = new DocumentBuilder()
      .setTitle('全栈之巅后台Api')
      .setDescription('供后台管理界面调用的服务端Api')
      .setVersion('1.0')
      .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(3000);
  console.log('http://localhost:3000')
  console.log('admin-api:  http://localhost:3000/api-docs')
}
bootstrap();
