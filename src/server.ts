import * as compression from 'compression';
import * as express from 'express';

const app = express();

app.use(compression());

