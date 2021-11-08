import { appNotFound } from './components/appNotFound';
import { appLogin } from './components/appLogin';
import { appSection } from './components/appSection';


export const routes = {
  firstRoute: { hash: '#/', component: appLogin},
  defaultRoute: { hash: '#/404', component: appNotFound },
  otherRoutes: [
    { hashExp: /^#\/$/, component: appLogin},
    { hashExp: /^#\/section$/, component: appSection},
    { hashExp: /^#\/other$/, component: appNotFound },
  ],
};
