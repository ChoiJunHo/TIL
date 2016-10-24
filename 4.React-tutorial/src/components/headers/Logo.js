import React from 'react';
class Logo extends React.Component{
  render(){
    return(
      <header>{this.props.title}</header>
    );
  }
}
export default Logo;
