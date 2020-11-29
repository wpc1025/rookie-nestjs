import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';


async function bootstrap() {
  const nestApp = await NestFactory.create(AppModule);
  // 全局使用winston
  const nestWinston = nestApp.get('NestWinston')
  nestApp.useLogger(nestWinston)

  const options = new DocumentBuilder()
    .setTitle('gkb')
    .setDescription('gkb open api')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(nestApp, options);
  SwaggerModule.setup('api', nestApp, document);

  // const httpClient = require('urllib');
  // const Consumer = require('ali-ons').Consumer;
  // const consumer = new Consumer({
  //   httpclient: httpClient,
  //   topic: 'AISP_BUSINESS_MSG',
  //   consumerGroup: 'rookie-nestjs',
  //   nameSrv: '192.168.47.183:9876',
  // });
  //
  // consumer.subscribe('AISP_BUSINESS_MSG', '*', async msg => {
  //   console.log(`receive message, msgId: ${msg.properties.UNIQ_KEY} offSetMsgId: ${msg.msgId}, body: ${msg.body.toString()} msg:`);
  //   return; // you can return ACTION_RETRY, then this message will be directly retried
  // });
  //
  // consumer.on('error', err => console.log(err));

  await nestApp.listen(3000);
}

bootstrap();
