var conf = require('./../../config/config');

// Load toolbox for import function
import { setNavigation, setRoutes, deleteNavigation, deleteRoutes, setConfig } from './../../../../core/toolboxFront.js';

// import Routes
import Routes from './routes/routes';

// import Menu navigation for the front
import Navigation from './routes/navigation';

// import Config
import Config from './routes/config';

// Add routes on global app
setRoutes(Routes);

// Add navigation on global app
setNavigation(Navigation);

// Add config plugin
setConfig(conf.name, Config);



// event for delete plugin
window.addEventListener(conf.name + ':delete', function (e) {
  deleteRoutes(Routes);
  deleteNavigation(Navigation);
}, false);
