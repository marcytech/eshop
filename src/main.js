import { lemeJs } from 'lemejs'
import { routes } from './routes';
import { appMain } from './components/appMain'

const app = lemeJs({
  appMain,
  routes,
});
  
app.init();
