import {transports, format, createLogger} from 'winston';
import 'winston-daily-rotate-file';
import {type TransformableInfo} from "logform";


const transport = new transports.DailyRotateFile({
    filename: './logs/app-%DATE%.log',
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    maxSize: "20m",
    maxFiles: "14d",
});

const logger = createLogger({
    level: 'info',
    format: format.combine(
        format.timestamp(),
        format.printf(
            (info: TransformableInfo) => `${info.timestamp} [${info.level.toUpperCase()}]: ${info.message}`
        )
    ),
    transports: [
        transport,
        new transports.Console()
    ],
});

export default logger;
