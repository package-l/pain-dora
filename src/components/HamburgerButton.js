import '../styles/HamburgerButton.scss';

const HamburgerButton = ({ name, open, setOpen }) => {

    const toggleOpen = () => {
        setOpen(!open);
        console.log("toggle" + open);
    }

  return (
    <>
        <div className="hamburger" id={name} open={open} onClick={toggleOpen}>
            <div className="burger burger1"></div>
            <div className="burger burger2"></div>
            <div className="burger burger3"></div>
        </div>
    </>
  )
}

export default HamburgerButton