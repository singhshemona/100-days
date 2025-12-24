import { Route, Switch } from 'wouter';
import { Home } from './pages/Home.tsx';
import { Images } from './pages/Images.tsx';
import { NotFound } from './pages/NotFound.tsx';

export const App = () => {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/images" component={Images} />
      <Route component={NotFound} />
    </Switch>
  );
};
