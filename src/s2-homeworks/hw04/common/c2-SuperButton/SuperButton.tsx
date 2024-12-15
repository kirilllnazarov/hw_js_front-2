import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import s from "./SuperButton.module.css";

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

type SuperButtonPropsType = DefaultButtonPropsType & {
	xType?: string;
};

const SuperButton: React.FC<SuperButtonPropsType> = ({
	xType,
	className,
	disabled,
	...restProps
}) => {

    // const finalClassName = s.button + (disabled ? s.disabled : xType === 'red' ? s.red + (className ? s.secondary + className : '') : '');

	const finalClassName = `${s.button} ${s.default} ${xType === "red" ? s.red : xType === "secondary" ? s.secondary : ""} ${disabled ? s.disabled : ""} `;

	return (
		<button
			disabled={disabled}
			className={finalClassName}
			{...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
		/>
	);
};

export default SuperButton;
