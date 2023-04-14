import { useState, useEffect, useRef } from 'react'

const DotNavigation = () => {
    const [activeSection, setActiveSection] = useState('roof');
    const sections = useRef([]);
  
    const handleScroll = () => {
      const pageYOffset = window.pageYOffset;
      let newActiveSection = null;
  
      sections.current.forEach((section) => {
        const sectionOffsetTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
  
        if (pageYOffset >= sectionOffsetTop && pageYOffset < sectionOffsetTop + sectionHeight) {
          newActiveSection = section.id;
        }
      });
  
      setActiveSection(newActiveSection);
    };
  
    useEffect(() => {
      sections.current = document.querySelectorAll('[data-status]');
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    
    const activeStyle = {
        backgroundColor: 'black',
        transition: 'linear 0.3s',
    };

  return (
    <div className="dot-navigation">
        <ul>
            <li className={activeSection === 'roof' ? 'active' : ''}><h1><a href="#roof" style={
                activeSection === 'roof' ? activeStyle : {}
            }>roof/lid</a></h1></li>
            <li className={activeSection === 'floor2' ? 'active' : ''}><h1><a href="#floor2" style={
                activeSection === 'floor2' ? activeStyle : {}
            }>floor 2</a></h1></li>
            <li><h1><a href="#ground">ground</a></h1></li>
            <li><h1><a href="#cellar">cellar</a></h1></li>
            <li><h1><a href="#basement">basement</a></h1></li>
        </ul>
    </div>
  )
}

export default DotNavigation