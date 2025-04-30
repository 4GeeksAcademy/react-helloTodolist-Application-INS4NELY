import React, { useState } from "react";

const Tasks = () => {

    const [listTask, setListTask] = useState([])
    const [task, setTask] = useState('')

    const buildTask = (e) => {
        if (e.key === 'Enter' && task !== '') {
            setListTask((actTask) => ([...actTask, { id: listTask.length + 1, task: task }]))
            setTask('')
        }
    }

    const deleteTask = (id) => {
        setListTask((actTask) => actTask.filter(task => task.id !== id))
    }

    return (
        <div>
            <div className="text-center mt-5">
                <h1>Todo List by NoMasTrabajos</h1>
            </div>
            <div className="container-fluid boxStyle position-absolute top-50 start-50 translate-middle rounded-3">
                <div className="mx-3 mb-3 mt-4">
                    <input className="form-control" type="text" placeholder={listTask.length === 0 ? `No tasks, add a task` : `Write more tasks`} value={task} onChange={(e) => { setTask(e.target.value) }} onKeyUp={buildTask} />
                </div>
                <div className="boxTaskStyle">
                    {listTask.map(({ id, task }) => (
                        <div className="border-top my-2 container" id={id} key={id}>
                            <div className="d-flex justify-content-between align-items-center m-3">
                                <p className="m-0">{task}</p>
                                <button className="btnStyle" onClick={() => deleteTask(id)}>
                                    <i className="ri-close-line fs-4"></i>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="fixed-bottom mb-2 py-2 border-top countStyle">
                    <p className="mt-2 ms-2">{listTask.length} item left</p>
                </div>
            </div>
        </div>
    )
}

export default Tasks