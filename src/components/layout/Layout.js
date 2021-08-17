import NavTop from './NavTop'
import Login from "../login/Login"

function Layout(props){
  return (
    <div>
      <NavTop />
      <Login />
      <main>{props.children}</main>
    </div>
  )
} 

export default Layout;