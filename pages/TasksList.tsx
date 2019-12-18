import React from 'react';
import { Task } from './types';
import { connect } from 'react-redux';
import { AppState } from '../reducer';
import { fetchTasks } from '../actions';
// Statless or function component
// Function Component
// React can bind type using React.FunctionCompoent
// it is the same as tasks: TasksListProps
// const TasksList2: React.FunctionComponent<TasksListProps> = ({tasks}) => {
//     return (
//         <ul>
//             {tasks.map((task, i) => {
//                 return <li key={i}>{task.title}</li>;
//             })}
//         </ul>
//     );
// }

interface StateProps {
    tasks: Task[];
}

interface DispatchProps {
    fetchTasks(): () =>void;
}

interface OwnProps {

}
interface AllProps extends StateProps, DispatchProps, OwnProps{
}

// Class Component
class TasksList extends React.Component<
    AllProps
> {
    onAddNewTaskClick() {
       const {fetchTasks} = this.props;
       fetchTasks();
    }
    render() {
        const {tasks} = this.props;
        return (
            <div>
                <ul>
                    {tasks.map((task, i) => {
                        return <li key={i}>{task.title}</li>;
                    })}
                </ul>
                <button onClick={this.onAddNewTaskClick}> Add </button>
             </div>
            );
           
    }
}
// the dispatch function has an error
// export const ConnectedTasksList = connect<
//   StateProps,
//   DispatchProps,
//   OwnProps,
//   AppState
// >(
//   state => ({
//     tasks: state.tasks
//   }),
//   dispatch => ({
//     fetchTasks: () => dispatch(fetchTasks())
//   })
// )(TasksList);
