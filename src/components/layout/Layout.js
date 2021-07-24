import NavigationTop from './NavigationTop'

function Layout(props){
  return (
    <div>
      <NavigationTop />
      <main>{props.children}</main>
    </div>
  )
}

export default Layout;