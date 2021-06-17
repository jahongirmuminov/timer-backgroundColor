import { Component } from "react" 
import Hall from "./Hall"
class Home extends Component {
    constructor() {
      super()
      let h = new Date().getHours()
      let m = new Date().getMinutes()
      let sec=new Date().getSeconds()
        this.state = {
          hour: h.toLocaleString(),
          minuts: m.toLocaleString(),
          second:sec.toLocaleString(),
          color:"fff"
        }
      this.countingSecond = this.countingSecond.bind(this)
    }


    countingSecond() {
      let h = new Date().getHours().toLocaleString()
      let m = new Date().getMinutes().toLocaleString()
      let sec=new Date().getSeconds().toLocaleString()
      this.setState({
        
        hour: h,
        minuts:m.length>1 ? m : "0"+m ,
        second:sec.length>1 ? sec : "0" + sec,

      })
      if(sec.toLocaleString()%4==0){
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        this.setState({color:randomColor})
      }
      
    }
    componentWillMount() {
      setInterval(this.countingSecond, 1000)
    }

    render() {
        this.time11=(<h1 style={{color:"#000",fontSize:"52px",fontWeight:"700"}}>{this.state.hour}:{this.state.minuts}:{this.state.second}</h1>)
      
    return (
        <div style={{textAlign:"center"}}>
            
           <Hall color={this.state.color} time={this.time11}/>
        </div>
      )
    }
  }
  export default Home