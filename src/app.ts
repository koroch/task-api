import express from 'express';
import morgan from 'morgan';

// Routes
import indexRoutes from './infra/http/routes';
import tasksRoutes from './infra/http/routes/tasks.routes';

class Applicaction {

    app: express.Application;

    constructor() {
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    settings() {
        this.app.set('port', 27017);
    }

    middlewares() {
        this.app.use(morgan('dev'));
        this.app.use(express.urlencoded({extended: false}));
        this.app.use(express.json());
    }

    routes() {
        this.app.use('/', indexRoutes);
        this.app.use('/task', tasksRoutes);
    }

    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('>>> Server is running at', this.app.get('port'));
        });
    }
}

export default Applicaction;