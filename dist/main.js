"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const wps_service_1 = require("./utilities/wpsClient/wps.service");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Whatsapp API')
        .setDescription('The whatsapp API description')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(process.env.PORT || 3000);
}
wps_service_1.GlobalService.client.initialize();
wps_service_1.GlobalService.client.on('qr', async (qr) => {
    console.log(qr);
    wps_service_1.GlobalService.qr = qr.toString();
});
wps_service_1.GlobalService.client.on('ready', user => {
    wps_service_1.GlobalService.status = 'ready';
});
wps_service_1.GlobalService.client.on('sendMessage', (body) => {
    var fileArray = body.file;
    fileArray.forEach(element => {
        if (typeof (element['phone']) != 'number') {
            wps_service_1.GlobalService.error.push(element['phone']);
            return;
        }
        wps_service_1.GlobalService.client.sendMessage(element['phone'] + '@c.us', body.message);
        wps_service_1.GlobalService.sent += 1;
    });
});
wps_service_1.GlobalService.client.on('disconnected', sesion => {
    wps_service_1.GlobalService.status = 'logout';
    wps_service_1.GlobalService.sent = 0;
    wps_service_1.GlobalService.qr = '';
    wps_service_1.GlobalService.client.initialize();
});
bootstrap();
//# sourceMappingURL=main.js.map