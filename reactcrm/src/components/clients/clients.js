import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Popup from './popa';
// import Popup from 'reactjs-popup';

// class Popup extends Component {
//     render() {
//         return (
//             <div className='popup'>
//                 <div className='popup_inner'>
//                     <h1>txtexample</h1>
//                     <button onClick={this.props.closePopup}>close me</button>
//                 </div>
//             </div>
//         );
//     }
// }

class Clients extends Component {
    constructor() {
        super();
        this.state = {
            clients: [],
            showPopup: null,
            usr: {
                name: "",
                surname: "",
                country: ""
            }
        }
    }
    async componentDidMount() {

        // await this.popState()
    }
    togglePopup(e) {
        // console.log(e.target.id)
        // console.log(e.target)
        this.setState({showPopup: e.target.id})
        // this.props.togglePopup()
    }
    closePopup= () => {
        this.setState({
          showPopup: null
        })
      }

    posttoDB = (e) => {
        let clients = [...this.state.client]

        console.log(`posted to DB ${e.target.name}` + e.target.name)
    }
    displayPopa = async (e) => {
        let clients = this.props.clients

        clients = clients.filter(c => { return c._id == e.target.id })[0]
        // console.log(clients)
        // return <Modal animation={false}>
        //     <Modal.Header closeButton>
        //         <Modal.Title>Update Dhatha</Modal.Title>
        //     </Modal.Header>
        //     <Modal.Body>
        //         {/* <span>Name: </span> <input id={clients._id} name={clients._id} type="text" placeholder={clients._id} value={this.state.usr.name}></input>
        //         <span>Surname: </span> <input id={clients._id} name={clients._id} type="text" placeholder={clients.surname} value={this.state.usr.surname}></input>
        //         <span>Country: </span> <input id={clients._id} name={clients._id} type="text" placeholder={clients.country} value={this.state.usr.country}></input> */}
        //     </Modal.Body>
        //     <Modal.Footer>
        //         <button variant="secondary" >
        //             Close
        //    </button>
        //         <button variant="primary" >
        //             Save Changes
        //    </button>
        //     </Modal.Footer>
        // </Modal>
        return <Popup iden={clients._id} clients={this.state.clients} />
    }
    render() {

        // console.log(this.props)
        let clients = this.props.clients
        // console.log(this.props)
        return <>{this.state.showPopup ? 
            <Popup updateData={this.props.updateData} clients={this.props.clients} id={this.state.showPopup} closePopup={this.closePopup} /> :
            null
        }<div className="tbl-header">
                <table cellPadding="0" cellSpacing="0" >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>email</th>
                            {/* <th>Sold</th> */}
                            <th>Owner</th>
                            <th>Country</th>
                        </tr>
                    </thead>
                </table>
            </div> <div className="tbl-content"><table cellPadding="0" cellSpacing="0" ><tbody>{clients.map(c => {
                return <tr onClick={this.togglePopup.bind(this)} className="client" name={c._id}>
                    <td> {c.name}
                    </td>
                    <td> {c.email}
                    </td>
                    {/* <td> {c.emailType}
                </td>
                <td> {c.sold}
                </td> */}
                    <td id={c._id}> {c.owner}
                    </td>
                    <td> {c.country}
                    </td></tr>
            })}</tbody></table></div></>
    }
}
export default Clients;