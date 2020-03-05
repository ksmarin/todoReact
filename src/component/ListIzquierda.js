import React, { Component } from 'react'
import { connect } from 'react-redux';



const List = (props) => {
    console.log(props.tareas);
    

    return (
        <>
            <li> {props.tareas.nombre}
                <button className="remove-item btn btn-default btn-xs pull-right">
                    Xx<span className="glyphicon glyphicon-remove"></span>
                </button>
            </li>
        </>
    )
}

class ListIzquierda extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { tareas } = this.props.tareas;

        return (
            <div className="col-md-6">
                <div className="todolist">
                    <h1>Already Done</h1>
                    <ul id="done-items" className="list-unstyled">

                        {
                            tareas ?
                                tareas.map((e, i) => e.estado ? <List index={i} key={i} tareas={e} /> : null)
                                :
                                null

                        }
                        {/* <li>Some item <button className="remove-item btn btn-default btn-xs pull-right">X<span className="glyphicon glyphicon-remove"></span></button></li> */}

                    </ul>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return { tareas: state.tareas }
}

const mapDispatchToProps = dispatch => {
    return {
        // agregar : data => dispatch(agregar_tarea(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListIzquierda);