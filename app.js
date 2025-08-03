import express from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import session from 'express-session';
import authRouter from './routes/authentication/auth.js';

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  cookieSession({
    keys: ['kfdjkjdfkljd'],
  })
);
app.use(
  session({
    secret: 'some-secret',
    resave: false,
    saveUninitialized: false,
  })
);

app.use(authRouter);
app.listen(4000, () => {
  console.log('Listening....');
});
