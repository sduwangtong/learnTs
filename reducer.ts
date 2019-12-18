import { Task } from "./pages/types";
import { FetchTasksAction } from "./actions";

export interface AppState {
    tasks: Task[],
}

const defaultState = {
    tasks: []
};

// return a new state
export const reducer = (
    state: AppState = defaultState,
    action: FetchTasksAction
) => {
    switch (action.type) {
        case 'FETCH_TASK':
            return {
                ...state,
                tasks: action.tasks
            }
    }
    return state;
};