import React from 'react';
import Link from 'next/link';

const About = () => {
  return (
     <div>
        <h1>About</h1>
        <Link href="/">
        <h1>Home</h1>
        </Link>
        <img src="../static/React.js_logo.png" alt=""/>
      
    </div>
  )
}

export default About;
