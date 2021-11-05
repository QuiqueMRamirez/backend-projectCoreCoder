import { Router } from 'express';
const router = Router();
import { createBank } from '../controllers/bank';

router.post('/createBank', createBank);

export default router;