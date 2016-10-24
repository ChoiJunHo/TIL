import React from 'react';
import Logo from './headers/Logo';
class Header extends React.Component {
  render(){
    return(
      <Logo title={this.props.title}/>
    );
  }
}

export default Header;
