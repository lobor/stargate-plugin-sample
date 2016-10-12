
// Load toolbox for import function
import { setNavigation, setRoutes, deleteNavigation, deleteRoutes } from './../../../../core/toolboxFront.js';

// import Routes
import Routes from './routes/routes';

// import Menu navigation for the front
import Navigation from './routes/navigation';

// Add routes on global app
setRoutes(Routes);

// Add navigation on global app
setNavigation(Navigation);



// event for delete plugin
elem.addEventListener('sampleplugin:delete', function (e) {
  deleteRoutes(Routes);
  deleteNavigation(Navigation);
}, false);
