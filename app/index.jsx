import style from './styles/';
import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';

class MessageItem extends React.Component {
  constructor() {
    super();
    MessageItem.propTypes = { item: React.PropTypes.object };
  }

  render() {
    return (
      <li onClick={this.props.editMessage}>{this.props.item.message}</li>
    )
  }
}

class MessageList extends React.Component {
  constructor(){
    super();
    this.state = {
      editingIndex : 0,
      currentIndex : 0,
      messageItems : []
    }
  }

  editMessage(event){
    // this.setState({
    //   editingIndex: event.target.value
    // })    
    console.log('editing item', item);      
  }  

  render() {
    let newMessages = this.state.messageItems.map((item, i) => {
      return <MessageItem key={i} item={item} editMessage={this.editMessage.bind(this, item)} />
    })

    return (
      <ul>{newMessages}</ul>
    );
  }
}

class MessageInput extends React.Component {
  constructor() {
    super(); //needed for inheritance
    //Define an intial state object
    this.state = {
      currentMessageIndex: 0,
      value: " ",
    };
  }
  
  _handleClick(event){
    if (this.refs.message.value.length === 0){
      console.log('empty');
    } else {
      var cmidx = this.state.currentMessageIndex;      
      // var newArray = this.state.messages.slice();
      // newArray.push(this.state.value);
      // add message to messageList messageItems
      this.setState({
        currentMessageIndex: cmidx + 1,
        value: ""
      })
      console.log(this.state.currentMessageIndex);      
    }
  }

  _handleChange(event){
    this.setState({
      value: event.target.value
    });
  }

  render() {

    return (
        <div>
          <input id="inputId" type="text" ref="message" value={this.state.value} onChange={this._handleChange.bind(this)} />
          <button onClick={this._handleClick.bind(this)}>push me</button>
          <div><MessageList /></div>
        </div>
    );
  }
}

var mountPoint = document.querySelector('#app');
ReactDOM.render(<MessageInput/>, mountPoint);
