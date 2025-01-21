import React from "react";
import { Slider, SliderProps } from "@mui/material";

type Type = {
    change?: (event: any, value: any) => void
};

const SuperRange: React.FC<SliderProps> = (props) => {
	return (
		<Slider
			sx={{}}
			{...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
		/>
	);
};

export default SuperRange;
