import React from 'react';
import Header from './Header';
import Content from './Content';
import RandomNumber from './RandomNumber';

class App extends React.Component {
    render(){
        return (
          <div>
            <h1>{this.state.header}</h1>
            <h1>{this.state.content}</h1>
            <Header   title={this.props.headerTitle}/>
            <Content  title={this.props.contentTitle} body={this.props.contentBody}/>
            <button onClick={this._updateHeader.bind(this)}>Update</button>
            <RandomNumber number={this.state.randomNumber} onUpdate={this._updateRandomNumber}/>
          </div>
        );
    }

    constructor(props){
      super(props);
      this.state = {
        header: "Header State",
        content: "Content State",
        randomNumber: Math.round(Math.random() * 100)
      };
      this._updateRandomNumber = this._updateRandomNumber.bind(this);
    }

    _updateRandomNumber(value){
      this.setState({
        randomNumber: value
      });
    }

    _updateHeader(text){
      this.setState({
        header: "Header has changed"
      });
    }
}
App.defaultProps = {
  headerTitle: "Default headerTitle",
  contentTitle: "5",
  contentBody: "Default contentBody"
};

export default App;
