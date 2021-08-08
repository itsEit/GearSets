import { Route, Switch } from "react-router";

import Layout from "./components/layout/Layout";
import Main from "./pages/Main";

function App() {
  const routes = [
    { exact: true, routeName: "/", routeComponent: Main },
  ];
  return (
    <Layout>
      <Switch>
        {routes.map((routes,key) => {
          return <Route exact={routes.exact} key={key} path={routes.routeName} component={routes.routeComponent} />;
        })}
      </Switch>
    </Layout>
  );
}

export default App;
