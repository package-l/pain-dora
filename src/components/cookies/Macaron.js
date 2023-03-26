import Cookies from 'js-cookie';

const Macaron = () => {
    Cookies.set('macaron', true);
  return (
    <div>Macaron</div>
  )
}

export default Macaron