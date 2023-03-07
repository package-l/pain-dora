import Cookies from 'js-cookie';

const Cookie = () => {
    Cookies.set('cookie', 'false', { expires: 1000 });
  return (
    <div>Cookie</div>
  )
}

export default Cookie