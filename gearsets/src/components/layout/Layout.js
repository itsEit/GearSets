import NavTop from "./NavTop";

function Layout(props) {
  return (
    <div>
      <NavTop userInfo={props.userInfo} />

      <main>{props.children}</main>
    </div>
  );
}

export default Layout;
