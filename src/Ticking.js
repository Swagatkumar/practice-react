import React from 'react';
import moment from 'moment';
import 'moment-timezone';

class Clock extends React.Component {
    constructor(props){
      super(props);
      this.state={
        date: moment().tz(this.props.timeZone).format("HH:mm:ss").toString()
      };
    }
  
    componentDidMount(){
      this.timerId = setInterval(
        ()=> this.tick(),
        1000
      );
    }
  
    componentWillUnmount(){
      clearInterval(this.timerId);
    }
  
    tick(){
      this.setState({
        date: moment().tz(this.props.timeZone).format("HH:mm:ss").toString()
      });
    }
  
    render(){
      return(
        <div>
          <h2>In {this.props.zone}, it is {this.state.date}.</h2>
        </div>
      );
    }
}

function Ticking(){
  return (
      <div>
          <h1>This is a World Clock</h1>
          <Clock timeZone="Asia/Kolkata" zone="Paradeep"/>
          <Clock timeZone="Asia/Seoul" zone="Seoul"/>
          <Clock timeZone="America/New_York" zone="New York"/>
          <Clock timeZone="Canada/Eastern" zone="Canada"/>
      </div>
  );
}

export default Ticking;