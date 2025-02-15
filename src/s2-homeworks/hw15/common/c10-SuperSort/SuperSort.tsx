import React from 'react'

// добавить в проект иконки и импортировать
const downIcon = '[\\/]'
const upIcon = '[/\\]'
const noneIcon = '[--=--]'

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
    let sortResult = ''
    if (sort !== down && sort !== up) {
        // Если сортировка ещё не установлена – устанавливаем down
        // console.log('down');
        sortResult =  down;

      } else if (sort === down) {
        // Если установлено down – переключаем на up
        // console.log('up');
        sortResult = up;

      } else {
        // Если установлено up – сбрасываем сортировку
        // console.log('cli  ck');
        sortResult = '';

      }
      return sortResult
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            {/*сделать иконку*/}
            {/*<img*/}
            {/*    id={id + '-icon-' + sort}*/}
            {/*    src={icon}*/}
            {/*/>*/}
            {icon} 
            {/*а это убрать*/}
        </span>
    )
}

export default SuperSort
