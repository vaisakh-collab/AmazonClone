import React from 'react';
import './Footer.css'

function Footer() {

  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
  };
    
  return (
    <div className='footer' onClick={scrollToTop}>
      <p>Back To top</p>
    </div>
  )
}

export default Footer
