import React from 'react';
import style from './nav.css';

export default React.createClass({
  render(){
    return (
      <div>
    	<img alt="Brand" src="/public/img/google.jpg" className=" logo img img-circle"/>
    	<ul>
    		<li>
    			<a href="/">Portfolio</a>
        </li>
    		<li>
    			<a href="/public/pdf/resume.pdf" target='_blank'>Resume</a>
        </li>
      </ul>
    </div>)
  }
})
