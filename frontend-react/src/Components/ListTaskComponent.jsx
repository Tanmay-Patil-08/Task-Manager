import { useState,useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { deleteTaskById, retriveAllTasks } from "../api/DataRetriveApi";

export default function ListTaskComponent() {
    const [message,setMessage] = useState("")
    const [tasks,setTasks] = useState([])
    const navigate = useNavigate()

    useEffect(
        ()=>refreshTasksList(),[]
    )

    function refreshTasksList() {
        retriveAllTasks('Tanmay')
        .then(response =>{
            console.log(response.data)
            setTasks(response.data)
        })
        .catch(error => console.log(error))
    }
    function deleteTask(id) {
        deleteTaskById('Tanmay',id).then(
            ()=>{
                setMessage(`Delete of Task with id ${id} successfull`)
                refreshTasksList()
            }
        )
        
    }

    function updateTask(id) {
        navigate(`/task/${id}`)
    }


    function addNewTask() {
        navigate(`/task/-1`)
        
    }
    return (
        <div className="container">

            <h1> Active Task</h1>
            {message &&<div className="alert alert-warning">{message}</div>}
                <table className="table">
                    <thead>
                        <tr>
                            <th>Task</th>
                            <th>Priority(1->3)</th>
                            <th>Skill</th>
                            <th>Status</th>
                            <th>TargetDate</th>
                            <th>Update Task</th>
                            <th>Delete Task</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tasks.map(
                                task => (
                                    
                                    <tr key={task.id}>
                                        <td>{task.description}</td>
                                        <td>{task.priority}</td>
                                        <td>{task.skill}</td>
                                        <td>{task.status}</td>
                                        <td>{task.targetDate}</td>
                                        <td><button className="btn btn-warning" onClick={()=>updateTask(task.id)}>Update</button></td>
                                        <td><button className="btn btn-danger" onClick={()=>deleteTask(task.id)}>Delete</button></td>
                                    </tr>
                                )
                            )
                        }


                    </tbody>
                </table>
                <div>
                    <button className="btn btn-success m-5" onClick={addNewTask}>Add new Task</button> 
                </div>
            </div>
    )
    
}