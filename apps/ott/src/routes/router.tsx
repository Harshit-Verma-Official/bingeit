import { createBrowserRouter } from 'react-router-dom';
import { ROURES } from './routes';

export const router = createBrowserRouter(ROURES, {
  basename: import.meta.env.BINGEIT_BASEPATH,
});
