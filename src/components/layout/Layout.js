import NavTop from './NavTop'

function Layout(props){
  return (
    <div>
      <NavTop />
      <main>{props.children}</main>
    </div>
  )
} 

export default Layout;