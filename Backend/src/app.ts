import express, { Application } from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
dotenv.config();


// Routes
import IndexRoutes from './routes/index.routes';
import UserRoutes from './routes/user.routes'
import ProductsRoutes from './routes/products.routes';
import SalesRoutes from './routes/sales.routes';
import RolesRoutes from './routes/roles.routes';
import UserRolesRoutes from './routes/users.roles.routes';
import SalesProductsRoutes from './routes/sales.products.routes';
import authRoutes from './routes/auth.routes';



export class App {

    private app: Application;

    constructor ( private port?: number | string){
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
        
    }

    settings(){
        this.app.set('port', this.port || process.env.PORT || 3000);
    }

    middlewares (){
        this.app.use(morgan('dev'));
        this.app.use(express.json());
    }

    routes () {
        this.app.use(IndexRoutes);
        this.app.use('/users',UserRoutes);
        this.app.use('/products',ProductsRoutes);
        this.app.use('/sales',SalesRoutes);
        this.app.use('/roles',RolesRoutes);
        this.app.use('/useroles',UserRolesRoutes);
        this.app.use('/salesproducts',SalesProductsRoutes);
        this.app.use('/auth',authRoutes);
    }

    async listen(){
        await this.app.listen(this.app.get('port'));
        console.log('Server on port',this.app.get('port'))
    }

}