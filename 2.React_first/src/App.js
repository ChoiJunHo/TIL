import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
import Header from './components/Header';
import Content from './components/Content'
import RandomNumber from './components/RandomNumber'

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      value: Math.round(Math.random() * 100)
    };
    //_updateValue에서 사용할 this를 bind하는 명령어!!
    this._updateValue = this._updateValue.bind(this);
      console.log('=constructor=')
      console.log(this);
  }

  _updateValue(randomValue){
      console.log('=_updateValue=')
      console.log(this);
    this.setState({
      value: randomValue
    });
  }

  render(){
    return(
      <div>
        <Header title={this.props.headerTitle}/>
        <Content title={this.props.contentTitle}
                  body={this.props.contentBody}/>
                  <RandomNumber number={this.state.value}
                  onUpdate={this._updateValue}/>
      </div>
    );
  }
}
App.defaultProps = {
  headerTitle: 'Default header title',
  contentTitle: 'Default content title',
  contentBody: 'Default content body'
}

export default App;
