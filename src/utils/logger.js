/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
import { createLogger, format, transports } from 'winston';
import 'winston-daily-rotate-file';
import constants from './constants.js';

class WinstonLogger {
  logger(filename) {
    // This step check if env is prod or demo then write the logs to file.
    const isFileEnv = this.fetchEnvironment();
    const loggingFormat = format.combine(
      format.errors({ stack: true }),
      format.timestamp({
        format: 'DD-MM-YYYY HH:mm:ss',
      }),
      {
        transform(info) {
          const args = info[Symbol.for('splat')] || [];
          const argsMap = args.map((e) => {
            if (e instanceof Error) {
              if (e.stack) return e.stack;
              return e;
            }
            if (typeof e === 'object') return JSON.stringify(e);
            return e;
          });

          const strArgs = argsMap && argsMap.length ? argsMap.join(' ') : '';
          if (filename) {
            info[Symbol.for('message')] =
              `[${info.timestamp}] [${info.level}] [${filename}] ${info.message} ${strArgs}`;
          } else {
            info[Symbol.for('message')] =
              `[${info.timestamp}] [${info.level}] ${info.message} ${strArgs}`;
          }
          return info;
        },
      },
    );

    // If the environment is not prod or demo then write the logs to console.
    const logger = createLogger({
      transports: [
        new transports.Console({
          handleExceptions: true,
          format: format.combine(format.colorize(), loggingFormat),
        }),
      ],
    });

    if (isFileEnv) {
      logger.add(
        new transports.DailyRotateFile({
          filename: 'solution-logs-%DATE%.log',
          datePattern: 'DD-MM-YYYY',
          zippedArchive: true,
          maxSize: '20m',
          level: 'debug',
          format: loggingFormat,
        }),
      );
    }
    return logger;
  }

  fetchEnvironment() {
    const environment = process.env.NODE_ENV;
    for (const env of constants.LOG_IN_FILE) {
      if (environment.includes(env)) {
        return true;
      }
    }
    return false;
  }
}

const winstonLogger = new WinstonLogger();
const logger = winstonLogger.logger();

export { winstonLogger, logger };
