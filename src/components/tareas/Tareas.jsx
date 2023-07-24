import React, { useState } from "react"

const ListaEjemplo = [
    {
        id: 1,
        nombre: 'Alimentar a los leones'
    },
    {
        id: 2,
        nombre: 'Jugar con las químeras'
    },
    {
        id: 3,
        nombre: 'Mimir'
    }
]

const Tareas = () => {
    const [tareas, setTareas] = useState(ListaEjemplo)
    const [nombreTarea, SetNombreTarea] = useState('')
    const handleModificarTarea = (evento) => {
        console.log(evento.target.value)
        SetNombreTarea(evento.target.value)
    }

    const handleBotonAgregarTarea = (evento) => {
        if (nombreTarea === '') {
            alert('Debes escribir una tarea')
        } else {
            let tareaNueva = {
                id: tareas.length + 1,
                nombre: nombreTarea
            }

                setTareas([...tareas, tareaNueva])
                SetNombreTarea('')
        }
    }

    return (

        <>
            <div className="row">
                <div className="col-12">
                    <h1>Tareas</h1>
                </div>
                <div className="col-12">
                    <label htmlFor="nombre-tarea">Añadir nueva tarea</label>
                    <input type="text" 
                    onChange={handleModificarTarea} 
                    className="form-control my-2" 
                    id="nombre-tarea" 
                    value={nombreTarea}
                    />

                    <button type="button" 
                    className="btn btn-primary"
                    onClick={handleBotonAgregarTarea}
                    >Añadir</button>
                </div>
                <div className="col-12 mt-4"> 
                    <h2>Lista de tareas</h2>
                </div>
                <div>
                <ul className="list-group">
                    {
                        tareas.map(function(tarea){
                            return (
                                <li className="list-group-item" key={tarea.id}>{tarea.nombre}</li>
                            )

                        })
                    }
                </ul>
                </div>
            </div>
        </>
    )
}

export default Tareas