import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';
import result from './components/clients/data.json';
import Navbarcomp from './components/actions/navbarcomp'
import Clients from './components/clients/clients';
import Modal from 'react-bootstrap/Modal'

class App extends Component {
  constructor() {
    super();
    this.getDatafromDB()
    this.state = {
      data: [],
      showPopup: false
    }

  }
  componentDidMount() {
    // console.log(this.state.data)
    // this.getDatafromDB()
  }

  getDatafromDB = async () => {
    let data = await (result)
    data = data.result
    return this.setState({ data })
    // console.log(res.result)
  }
  updateData = (obj) => {
    let data = [...this.state.data]
    let client = data.find(c => {
      return c["_id"] === obj._id
    })
    let name = obj.name + " " + obj.surname
    console.log('pushed app array')
    console.log(client)
    data = data.map(d => {
      if (d._id === obj._id) {
        d.name = name;
        d.email = obj.email
        // break
      } 
      return d
    })
    this.setState({ data })
    // this.setState({clients})
  }
  render() {
    // console.log(this.state)
    return <div className="App">
      {/* {this.state.data} */}
      <Router>
        <div className="nav" >
          <div className="nav-links" >
            <Link to='/clients'>Clients </Link>
            <Link to='/actions'>Actions </Link>
            <Link to='/analytics'>Analytics </Link></div></div>
        <Route path="/clients" exact render={() => <Clients updateData={this.updateData} clients={this.state.data} getDatafromDB={this.getDatafromDB} />} />
      </Router>
      {/* <Clients clients={this.state.data}/> */}
    </div>
  }
}
export default App;
