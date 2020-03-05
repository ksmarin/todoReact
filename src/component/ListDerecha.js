import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { finalizar_tarea } from  './../redux/actions/tarea.action';



const Checkbox = (props) => {

    const dispatch = useDispatch();

    const finalizar = () => {
        dispatch(finalizar_tarea(props.index));
    }

    return (
        <div className="checkbox">
            <label>
                <input onClick={finalizar} type="checkbox" value="" />{props.nombre}
            </label>
        </div>
    )
}

const List = (props) => {
    
    return (
        <>
            <li className="ui-state-default">
                <Checkbox index={props.index} {...props.tareas}/>
            </li>
        </>
    )
}


export default function ListDerecha() {

    const {tareas} = useSelector(state => state.tareas)

    return (
        <>
            <ul id="sortable" className="list-unstyled">
                {
                    tareas ?
                        tareas.map((e, i) => !e.estado ? <List index={i} key={i} tareas={e} /> : null)
                        :
                        null

                }
            </ul>
        </>
    )

}
