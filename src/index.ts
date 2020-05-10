import express, { Request, Response } from 'express';
import { router } from './routes/loginRoutes';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';

const app = express();

// Apply middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['encodesession'] }));

// 
app.use(router);

app.listen(3000, () => {
  console.log('Listening on port 3000');
})