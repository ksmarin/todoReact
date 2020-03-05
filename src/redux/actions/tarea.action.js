export const AGREGAR_TAREA = "AGREGAR_TAREA";
export const FINALIZAR_TAREA = "FINALIZAR_TAREA";
export const ELIMINAR_TAREA = "ELIMINAR_TAREA";


export const agregar_tarea = datos => {
    return { type: AGREGAR_TAREA, datos }
}

export const finalizar_tarea = index => {
    return { type: FINALIZAR_TAREA, index }
}

export const eliminar_tarea = index => {
    return { type: ELIMINAR_TAREA, index }
}