import React from 'react';
import SearchUser from './SearchUser';
import UserInfo from './UserInfo';

var GitHub = React.createClass({
  getInitialState: function () {
    return {
      user: null,
      repos: [],
    };
  },
  updateUser: function (user) {
    this.setState({user: user}); /* Atualização do usúario */
  },  
  updateRepos: function (repos) {
    this.setState({repos: repos}); /* Atualização do repositorios */
  }, 
  render: function() {
    return(
      <div className="container">
        <SearchUser 
          updateUser={this.updateUser}
          updateRepos={this.updateRepos}
        />
        <UserInfo 
        user={this.state.user}
        repos={this.state.repos}
        />
      </div>
    );
  }
});

export default GitHub;