import { ConfigShape } from '../types/types';

const defaultConfig: ConfigShape = {
  "serverOptions": {
    "port": 3001,
    "host": "localhost"
  },
  "logFile": {
    "format": "ndjson",
    "enabled": true,
    "fileName": "l2r.log",
    "location": "./",
    "timeType": "timestamp",
    "colorizeStyledLog": false
  },
  "console": {
    "format": "styled",
    "enabled": true,
    "timeType": "locale",
    "colorizeStyledLog": true
  }
}
export default defaultConfig;
