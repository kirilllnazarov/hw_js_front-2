import { Pagination } from "@mui/material";
import React, { type ChangeEvent } from "react";
import SuperSelect from "../../../hw07/common/c5-SuperSelect/SuperSelect";
import s from "./SuperPagination.module.css";

export type SuperPaginationPropsType = {
	id?: string;
	page: number;
	itemsCountForPage: number;
	totalCount: number;
	onChange: (page: number, count: number) => void;
};

const SuperPagination: React.FC<SuperPaginationPropsType> = ({
	page,
	itemsCountForPage,
	totalCount,
	onChange,
	id = "hw15",
}) => {
	const lastPage = Math.ceil(totalCount / itemsCountForPage); // пишет студент, вычислить количество страниц . . .

	const onChangeCallback = (event: ChangeEvent<unknown>, page: number) => {
		// пишет студент     сюда приходит номер страницы
		// console.log(event);
		// console.log(page);

        onChange(page, itemsCountForPage)
	};

	const onChangeSelect = (event: ChangeEvent<HTMLSelectElement>) => {
		// пишет студент   сюда приходит количество элементов на странице
		const itemsOnPage = Number(event.currentTarget.value);
		// console.log(itemsOnPage);

        onChange(page, itemsOnPage)
	};

	return (
		<div className={s.pagination}>
			<Pagination
				id={id + "-pagination"}
				sx={
					{
						// стили для Pagination // пишет студент
					}
				}
				page={page}
				count={lastPage}
				onChange={onChangeCallback}
				hideNextButton
				hidePrevButton
			/>

			<span className={s.text1}>показать</span>

			<SuperSelect
				id={id + "-pagination-select"}
				value={itemsCountForPage}
				options={[
					{ id: 4, value: 4 },
					{ id: 7, value: 7 },
					{ id: 10, value: 10 },
				]}
				onChange={onChangeSelect}
			/>

			<span className={s.text2}>строк в таблице</span>
		</div>
	);
};

export default SuperPagination;
