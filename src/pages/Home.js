import React, { Component } from 'react'
import connent, { connect } from 'react-redux'

import Form from '../component/Form'
import ListIzquierda from '../component/ListIzquierda'


class Home extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <Form />
                        <ListIzquierda />
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
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);