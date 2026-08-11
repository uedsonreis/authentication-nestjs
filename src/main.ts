import { NestFactory } from '@nestjs/core'
import { INestApplication } from '@nestjs/common'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

import { AppModule } from './app.module'

function setupDocumentation(app: INestApplication, port: number) {

    const config = new DocumentBuilder()
        .setTitle('Authentication API')
        .setDescription(`Base URL: http://localhost:${port}/`)
        .setVersion('1.1.0')
        .build()

    const documentFactory = () => SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('docs', app, documentFactory)
}

async function bootstrap() {
    const port = 3030

    const app = await NestFactory.create(AppModule)
    app.enableCors()
    setupDocumentation(app, port)

    await app.listen(port)
}

bootstrap()