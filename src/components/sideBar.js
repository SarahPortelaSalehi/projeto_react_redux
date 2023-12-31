import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeUser } from '../store/actions/usuarios.action'

export class SideBar extends Component {
  render() {
    return (
      <ul>
        {this.props.usuarios.list.map(user => (
          <li key ={index}>{user}<button onClick={()=> this.prop.changeUser(user)}>selecionar</button></li>
        ))}
      </ul>
    )
  }
}

const mapStateToProps = (state) => ({
  usuarios: state.usuariosReducer
})

const mapDispatchToProps = dispatch => ({
  changeUser: (user) => dispatch(changeUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(SideBar)