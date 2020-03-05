import { AGREGAR_TAREA, FINALIZAR_TAREA, ELIMINAR_TAREA } from './../actions/tarea.action'

const init = {
    tareas : [],
    cantidad_tareas: 0,
    loading : false
}


export default (state = init, action) =>{
    switch (action.type) {
        case AGREGAR_TAREA:
             state.tareas.push(action.datos);
             return {...state, cantidad_tareas: state.tareas.filter(e=> !e.estado).length};
        case FINALIZAR_TAREA:
            state.tareas[action.index].estado = true;
            return {...state, cantidad_tareas: state.tareas.filter(e=> !e.estado).length };
        case ELIMINAR_TAREA:
            state.tareas.slice(action.index, 1)
            return {...state, cantidad_tareas: state.tareas.filter(e=> !e.estado).length };
        default:
            return state;
    }

}