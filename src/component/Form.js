import React, { Component } from 'react'
import ListDerecha from './ListDerecha'

import  { connect } from 'react-redux';
import { agregar_tarea } from '../redux/actions/tarea.action';

class Form extends Component {


    constructor(props){
        super(props)
        this.state = {
            nombre: "",
            estado: false
        }
    }

    changeNombre = event =>{
        this.setState({
            nombre: event.target.value
        })
    }

    guardar = () => {
        this.props.agregar(this.state)
    }

    render() {
        
        return (
            <div className="col-md-6">
                <div className="todolist not-done">
                    <input type="text" className="form-control add-todo" placeholder="Add todo" onChange={this.changeNombre}/>
                    <button id="checkAll" className="btn btn-success" onClick={this.guardar}>Mark all as done</button>
                    <br />
                    <br />
                    <ListDerecha />
                    <div className="todo-footer">
                        <strong><span className="count-todos"></span></strong> Items Left : {this.props.cantidad_tareas}
                        </div>
                </div>
            </div>

        )
    }
}


const mapStateToProps = state => {
    return { cantidad_tareas : state.tareas.cantidad_tareas}
}

const mapDispatchToProps = dispatch => {
    return {
        agregar : data => dispatch(agregar_tarea(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);