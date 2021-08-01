import { parseGear } from "../utilities/GearParser";
import GearSearch from '../components/gear/GearSearch'

function Main(props) {
  function onSearchText(data){
    // console.log(data)
  }
  parseGear('parseGear')
  return <GearSearch onSearchText={onSearchText} />;
}
export default Main;
