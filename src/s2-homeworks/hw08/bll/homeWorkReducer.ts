import { UserType } from "../HW8";

type ActionType = { type: "sort"; payload: "up" | "down" } | { type: "check"; payload: number };

export const homeWorkReducer = (state: UserType[], action: ActionType): any => {
	// need to fix any
	switch (action.type) {
        case "sort": {
            if (action.payload === 'down' || action.payload === 'up') {
                return [...state].sort((a, b) => 
                    action.payload === 'up' 
                        ? (a.name < b.name ? -1 : a.name > b.name ? 1 : 0) 
                        : (a.name > b.name ? -1 : a.name < b.name ? 1 : 0) 
                );
            }
			return state; // need to fix
		}
		case "check": {
			return [...state].filter(s => s.age >= action.payload) // need to fix
		}
		default:
			return state;
	}
};