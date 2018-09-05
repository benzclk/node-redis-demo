import { Router } from 'express';

import MetaController from './controllers/meta.controller';
import RedisController from './controllers/redis.controller';
import errorHandler from './middleware/error-handler';

const routes = new Router();

routes.get('/', MetaController.index);

routes.get('/redis', RedisController.fetch);

routes.use(errorHandler);

export default routes;
