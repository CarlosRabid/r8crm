import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
// import '../../App.css';
// import Popup from 'reactjs-popup';

class Popup extends React.Component {
   constructor() {
      super();
      this.state = {
         name: "",
         surname: "",
         email: ""
      }
   }
   closePopup = () => {
      this.props.closePopup()
   }

   update = (event) => {
      let state = { ...this.state }
      let type = event.target.name
      let value = event.target.value
      // console.log(event.target)
      return this.setState({
         [type]: value
      })
      // console.log(state)
   }
   updateData = async (e) => {
      // let state = { ...this.state }
      console.log(e.target)
      let _id = e.target.name

      let obj = {_id, name: this.state.name, surname: this.state.surname, email: this.state.email}
      console.log(obj)
      await this.props.updateData(obj)
      this.closePopup()
   }
   render() {
      let clients = this.props.clients
      let client = clients.filter(c => { return c._id === this.props.id })[0]
      let surname = client["name"].replace(/^.* (.*$)/, '$1')
      // console.log(surname)
      let email = client.email
      let name = client["name"].replace(/(^.*) .*$/, '$1')

      // console.log(name)
      return (
         <div className='popup'>
            <div className='popup\_inner'>
               <h4>Update</h4>
               <div><input type="text" placeholder={name} name="name" value={this.state.name} onChange={this.update} /></div>
               <div><input type="text" placeholder={surname} name="surname" value={this.state.surname} onChange={this.update} /></div>
               <div><input type="text" placeholder={email} name="email" value={this.state.email} onChange={this.update} /></div>
               <button name={client["_id"]} onClick={this.updateData} >Update</button>
               <button onClick={this.closePopup} >Discard Changes</button>
            </div>
         </div>
      );
   }
}


// class Popa extends Component {
//    constructor() {
//       super();
//       console.log('popa')
//       this.state = {
//          clients: []
//       }

//    }
//    componentDidMount() {
//       let clients = this.props.clients
//       this.setState({ clients })
//       console.log('popa31')
//    }

//    // const [show, setShow] = useState(false);
//    // this.setState({show: true})
//    // const [show, setShow] = useState(false);

//    // const handleClose = () => setShow(false);
//    // const handleShow = () => setShow(true);
//    render() {
//       console.log(this.props)
//       let _id = this.props.iden
//       let clients = [...this.state.clients]
//       clients = clients.filter(c => {
//          return clients._id === _id
//       })[0]
//       return clients.map(c => {
//         return <>
//             <Modal animation={false}>
//                <Modal.Header closeButton>
//                   <Modal.Title>Update Dhatha</Modal.Title>
//                </Modal.Header>
//                <Modal.Body>
//                   <span>Name: </span> <input id={clients._id} name={clients._id} type="text" placeholder={clients._id} value={this.state.usr.name}></input>
//                   <span>Surname: </span> <input id={clients._id} name={clients._id} type="text" placeholder={clients.surname} value={this.state.usr.surname}></input>
//                   <span>Country: </span> <input id={clients._id} name={clients._id} type="text" placeholder={clients.country} value={this.state.usr.country}></input>
//                </Modal.Body>
//                <Modal.Footer>
//                   <button variant="secondary" >
//                      Close
//                   </button>
//                   <button variant="primary" >
//                      Save Changes
//                   </button>
//                </Modal.Footer>
//             </Modal>
//          </>
//       })
//    }
// }


export default Popup;