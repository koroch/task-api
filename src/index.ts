import App from './app';
import { connect } from './infra/mongoose/database';

const app = new App();
connect();

app.start();
