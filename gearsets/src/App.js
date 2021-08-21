import { useState } from "react";
import { Route, Switch } from "react-router";

import Layout from "./components/layout/Layout";
import Login from "./components/login/Login";
import Main from "./pages/Main";

function App() {
  const [userInfo, setUserInfo] = useState([]);
  const routes = [{ exact: true, routeName: "/", routeComponent: Main }];
  const userLogin = async (e) => {
    await setUserInfo(e);
  };
  return (
    <Layout userInfo={userInfo}>
      <Login userLogin={userLogin} />
      <Switch>
        {routes.map((routes, key) => {
          return <Route exact={routes.exact} key={key} path={routes.routeName} component={routes.routeComponent} />;
        })}
      </Switch>
    </Layout>
  );
}

export default App;
