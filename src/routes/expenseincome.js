import { Router } from 'express';
const router = Router();
import { createExpInc } from '../controllers/expenseincome';

router.post('/createIncExp', createExpInc);

export default router;