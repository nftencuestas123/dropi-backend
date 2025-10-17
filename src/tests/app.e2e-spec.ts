import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET) debe responder 404 si no hay ruta', async () => {
    const response = await request(app.getHttpServer()).get('/');
    expect(response.status).toBe(404);
  });

  afterAll(async () => {
    await app.close();
  });
});
