import express from 'express';
import responseManager from '../../common/response-manager.js';
import crudRouter from './crud-router.js';

const router = express.Router();

// Health check route
router.get('/health', (req, res) => {
  responseManager.sendSuccessResponse(res, { health: 'ok' }, 'Health check success');
});

router.use('/', crudRouter);

export default router;
