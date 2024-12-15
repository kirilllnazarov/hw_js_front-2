import React, { DetailedHTMLProps, InputHTMLAttributes, HTMLAttributes, useState } from "react";
import s from "./SuperEditableSpan.module.css";
import SuperInputText from "../../../hw04/common/c1-SuperInputText/SuperInputText";
import editIcon from "./editIcon.svg";

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type DefaultSpanPropsType = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

type SuperEditableSpanType = Omit<DefaultInputPropsType, "type"> & {
	onChangeText?: (value: string) => void;
	onEnter?: () => void;
	error?: string;
	spanProps?: DefaultSpanPropsType & { defaultText?: string };
};

const SuperEditableSpan: React.FC<SuperEditableSpanType> = ({
	autoFocus,
	onBlur,
	onEnter,
	spanProps,
	...restProps
}) => {
	const [editMode, setEditMode] = useState<boolean>(false);
	const { children, onDoubleClick, className, defaultText, ...restSpanProps } = spanProps || {};

	const onEnterCallback = () => {
		// выключить editMode при нажатии Enter // делают студенты
		// onEnter?.()
		setEditMode(false);
	};
	const onBlurCallback = (e: React.FocusEvent<HTMLInputElement>) => {
		// выключить editMode при нажатии за пределами инпута // делают студенты
		// onBlur?.(e);
		setEditMode(false);
	};
	const onDoubleClickCallBack = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
		// включить editMode при двойном клике // делают студенты
		// onDoubleClick?.(e);
		setEditMode(true);
	};

	const spanClassName = s.span + (className ? " " + className : "");

	return (
		<>
			{editMode ? (
				<SuperInputText
					autoFocus={autoFocus || true}
					onBlur={onBlurCallback}
					onEnter={onEnterCallback}
					className={s.input}
					{...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
				/>
			) : (
				<div className={s.spanBlock}>
					<img src={editIcon} className={s.pen} alt={"edit"} />
					<span onDoubleClick={onDoubleClickCallBack} className={spanClassName} {...restSpanProps}>
						{/*если нет захардкодженного текста для спана, то значение инпута*/}
						{children || restProps.value || defaultText}
					</span>
				</div>
			)}
		</>
	);
};

export default SuperEditableSpan;
