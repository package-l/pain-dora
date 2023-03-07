import '../styles/RejectCookies.scss';

const RejectCookies = () => {
  return (
    <div className="reject-container">
        <div className="line1a">O<span>H</span></div>
        <div className="line1b"><span>N</span>O</div>
        <div className="line2">
            <svg viewBox="0 20 500 500">
                <path id="curve" fill="transparent" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" />
                <text width="500">
                    <textPath startOffset="50%" text-anchor="middle" xlinkHref="#curve">. . . unfortunately, no to cookies, means no cookie story for you . . .</textPath>
                </text>
            </svg>
        </div>
    </div>
  )
}

export default RejectCookies