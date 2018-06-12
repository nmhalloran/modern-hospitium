import React from 'react';



const Greeting = ({ currentUser, logout, demoLogin, openModal }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <button className='login' onClick={() => demoLogin()}>Demo Login!</button>
      <button className='login' onClick={() => openModal('signup')}>Join</button>
      <button className='signup' onClick={() => openModal('login')}>Log In</button>

    </nav>
  );
  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  const personalGreeting = () => (
    <hgroup className="header-group">
      <button onClick={myFunction}>
        <img className='header-pic' src={currentUser.image_url} />
        <i className="shift fas fa-caret-down"></i>
      </button>

      <ul id="myDropdown" className='header-notifications'>
        <button className='header-notification-items' onClick={logout}>Log Out</button>
        <button className='header-notification-items' onClick={logout}>Profile</button>
        <button className='header-notification-items' onClick={logout}>Profile</button>
      </ul>
    </hgroup>
  );

  return (
    currentUser ?
    personalGreeting(currentUser, logout) :
    sessionLinks()
  );
};

export default Greeting;
