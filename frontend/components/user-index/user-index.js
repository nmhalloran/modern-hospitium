import React from 'react';

class UsersIndex extends React.Component {

  render(props) {
    let users = this.props.hosts.map((host, i) => {
      if (i < 9) {
        return (
            <li key={host.id} className='index-pic-container'>
              <img className='index-pic' src={host.image_url} />
              <p className='index-title'>{host.username}</p>
            </li>
        )
      }
    });
    return users;
  }
}

export default UsersIndex;
