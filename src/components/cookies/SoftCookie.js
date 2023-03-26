import Cookies from 'js-cookie';

const SoftCookie = () => {
    Cookies.set('softcookie', true);
  return (
    <div>SoftCookie</div>
  )
}

export default SoftCookie