import { Action } from "redux";
import { Task } from "./pages/types";

export interface FetchTasksAction extends Action<'FETCH_TASK'> {
    tasks: Task[]
}

export const fetchTasks = (): FetchTasksAction => ({
    type: 'FETCH_TASK',
    tasks: [{title: 'fist task'}]
});