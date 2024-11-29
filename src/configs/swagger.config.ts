import { INestApplication } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { NAME_APP } from "./app.config";

export function setupSwagger(app: INestApplication): void {
    const config = new DocumentBuilder()
    .setTitle(NAME_APP)
    .setDescription(`Api ${NAME_APP}`)
    .setVersion('v1.0')
    .addBearerAuth({ type: 'http', scheme: 'bearer', in: 'header' }, 'token')
    .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document, {
        swaggerOptions: { persistAuthorization: true },
      });
}