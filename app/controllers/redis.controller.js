import BaseController from './base.controller';
import redisClient from '../redis';

class RedisController extends BaseController {

    fetch = async (req, res) => {
        let emp1 = await redisClient.hgetall('employeeDAO:11');

        let xxx = await redisClient.set(['xxx', '456']);
        let xxTest = await redisClient.get('xxx');
        console.log(xxTest);

        console.log('xx', emp1);

        res.json(emp1);
    }
}

export default new RedisController();
