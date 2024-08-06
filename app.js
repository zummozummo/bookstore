import express from 'express';
import cors from 'cors';
import v1Router from './src/routes/v1/v1-router.js';
import responseManager from './src/common/response-manager.js';
import AppError from './src/utils/errors.js';
import errorConstants from './src/utils/error-constants.js';
import { logger } from './src/utils/logger.js';

const app = express();
app.use(cors());
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing applican
app.use('/v1', v1Router);

const port = process.env.NODE_SERVICE_PORT || 9001;
app.listen(port, () => {
  logger.info(`Server is running on port ${port}`);
});

app.use((req, res) => {
  responseManager.sendErrorResponse(res, new AppError(errorConstants.E_NOT_FOUND));
});
