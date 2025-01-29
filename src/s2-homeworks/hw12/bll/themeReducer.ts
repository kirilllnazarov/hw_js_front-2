const initState = {
	themeId: 1,
};

export const themeReducer = (state: InitStateType = initState, action: ActionType): InitStateType => {
	// fix any
	switch (action.type) {
		// дописать
		case "SET_THEME_ID":
			return {...state, themeId: action.id}

		default:
			return state;
	}
};

export const changeThemeId = (id: number) => ({ type: "SET_THEME_ID", id }); // fix (id: number):any

type ChangeThemeIdAT = ReturnType<typeof changeThemeId>;

type ActionType = ChangeThemeIdAT

// написал сам для init state
type InitStateType = typeof initState;
