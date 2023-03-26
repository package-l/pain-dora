import Cookies from 'js-cookie';

const Wafer = () => {
    Cookies.set('wafer', true);
  return (
    <div>Wafer</div>
  )
}

export default Wafer