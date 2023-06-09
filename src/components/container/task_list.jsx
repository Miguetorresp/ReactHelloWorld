import React, { useState, useEffect } from 'react';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';
import '../../styles/task.scss';

const TaskListComponent = () => {

    const defaultTask = new Task('Example','Default Description', false, LEVELS.NORMAL);
    //Estado del componente
    const [tasks, setTasks] = useState([defaultTask]);

    const [loading, setLoading] = useState(true);

    //Control del ciclo de vida del componente
    useEffect(() => {
        console.log('Task State has been modified');
        setLoading(false);
        return () => {
            console.log('TaskList component is going to unmount...');
        };
    }, [tasks]);



    const changeCompleted = (id) => {
        console.log('TODO: Cambiar estado de una tarea');
    }

    return (
        <div>
            <div><h1>Your Task:</h1></div>
            {/* TODO Aplicar un FOR/MAP para renderizar una lista*/}
            <TaskComponent task = { defaultTask } ></TaskComponent>        
        </div>
    );
};




export default TaskListComponent;
