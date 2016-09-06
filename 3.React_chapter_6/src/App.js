import React from 'react';
import update from 'react-addons-update'

class App extends React.Component {
    render(){

        return (
                <Contacts/>
        );
    }
}

class Contacts extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        contactData: [
            {name: "Abet", phone: "010-0000-0001"},
            {name: "Betty", phone: "010-0000-0002"},
            {name: "Charlie", phone: "010-0000-0003"},
            {name: "David", phone: "010-0000-0004"}
        ]
      };
    }
    _insertContact(name, phone){
      let newState = update(this.state, {
        contactData:{
          $push: [{"name": name, "phone":phone}]
        }
      });
      this.setState(newState);
    }
    render(){
        return(
            <div>
                <h1>Contacts</h1>
                <ul>
                    {this.state.contactData.map((contact, i) => {
                      return(
                        <ContactsInfo name={contact.name} phone={contact.phone} key={i}/>
                      );
                    })}
                </ul>
                <ContractCreator onInsert={this._insertContact.bind(this)}/>
            </div>
        );
    }
}

class ContactsInfo extends React.Component {
    render(){
        return(
          <li>{this.props.name} {this.props.phone}</li>
        );
    }
}

class ContractCreator extends React.Component{
  constructor(props){
    super(props);
    this.state={
      name: "", phone: ""
    };
  }
  handleChange(e){
    var nextState = {};
    //e.target.name is 'name' or 'phone'
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }
  handleClick(e){
    console.log(this);
    this.props.onInsert(this.state.name, this.state.phone);
    this.setState({name:"", phone:""});
  }
  render(){
    return(
      <div>
        <p>
          <input type="text" name="name" placeholder="name" value={this.state.name} onChange={this.handleChange.bind(this)}/>
          <input type="text" name="phone" placeholder="phone" value={this.state.phone} onChange={this.handleChange.bind(this)}/>
          <button onClick={this.handleClick.bind(this)}>Insert</button>
        </p>
      </div>
    )
  }
}

export default App;
