import { Route, Switch } from "react-router";

import Layout from "./components/layout/Layout";
import Main from "./pages/Main";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
