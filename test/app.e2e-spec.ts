import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('CalculatorController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/evaluate (POST) valid expression', () => {
    return request(app.getHttpServer())
      .post('/evaluate')
      .send({ expression: '(1-1) * 2 + 3 * (1 - 3 + 4) + 10 / 2' })
      .expect(201)
      .expect({ result: 11 });
  });

  it('/evaluate (POST) invalid expression', () => {
    return request(app.getHttpServer())
      .post('/evaluate')
      .send({ expression: '1 + a' })
      .expect(400);
  });

  afterAll(async () => {
    await app.close();
  });
});
