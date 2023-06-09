import express, {Application} from 'express'
//Nuestras rutas creadas importadas para poder hacer uso de ellas 
import indexRoutes from './routes/IndexRoutes'
import companyRoutes from './routes/CompanyRoutes'
import contactRoutes from './routes/ContactRoutes'
import cityRoutes from './routes/CityRoutes'
import employeeRoutes from './routes/EmployeeRoutes'
import projectRoutes from './routes/ProjectRoutes'

import morgan from 'morgan'
import cors from 'cors' 


class Server{
	public app: Application
	constructor() {
		this.app = express();
        this.config();
        this.routes();
	}
    config(): void{
        this.app.set('port', process.env.PORT || 3000)
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json()); 
        this.app.use(express.urlencoded({extended:false}));
    }
    routes(): void{
        this.app.use('/', indexRoutes);
        this.app.use('/api/companies',companyRoutes);
        this.app.use('/api/contacts', contactRoutes);
        this.app.use('/api/cities', cityRoutes);
        this.app.use('/api/employees', employeeRoutes);
        this.app.use('/api/projects', projectRoutes);

    }
    start(): void{
        this.app.listen(this.app.get('port'), () => {console.log("Servidor en el puerto", this.app.get('port'))});
    }

}

const server = new Server();
server.start();

