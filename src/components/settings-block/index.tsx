import React, { FC, useState, useEffect } from 'react';
import style from './index.module.scss';
import { ButtonGroupComponent } from '../button-group';
import { Checkbox } from '@mui/material';

interface SettingsBlockProps {
  selectedTransfers: number[];
  setSelectedTransfers: (newList: number[]) => void;
}

export const SettingsBlock: FC<SettingsBlockProps> = ({ selectedTransfers, setSelectedTransfers }) => {
  const [selectAll, setSelectAll] = useState(true); // Начальное состояние "Все" - выбрано

  // Обработчик для кнопки "Все"
  const handleSelectAllChange = () => {
    if (selectAll) {
      // Если "Все" уже выбрано, сбрасываем состояние выбранных пересадок
      setSelectedTransfers([]);
    } else {
      // Если "Все" не выбрано, выбираем все пересадки
      setSelectedTransfers([0, 1, 2, 3]);
    }
    setSelectAll(!selectAll); // Инвертируем состояние кнопки "Все"
  };

  // Обработчик для чекбоксов пересадок
  const handleTransferCheckboxChange = (index: number) => {
    if (selectedTransfers.includes(index)) {
      // Если пересадка уже выбрана, убираем её из списка
      setSelectedTransfers(selectedTransfers.filter((item) => item !== index));
    } else {
      // Если пересадка не выбрана, добавляем её в список
      setSelectedTransfers([...selectedTransfers, index]);
    }
    setSelectAll(false); // Сбрасываем состояние кнопки "Все"
  };

  return (
    <div className={style.block}>
      <div className={style.body}>
        <div className={style.title}>Валюта</div>
        <div className={style.buttons}><ButtonGroupComponent /></div>
        <div className={style.title}>Количество пересадок</div>
        <div className={style.transfers}>
          <div className={style.transfer}>
            <Checkbox
              onChange={handleSelectAllChange}
              checked={selectAll}
            /> Все
          </div>
          <div className={style.transfer}>
            <Checkbox
              onChange={() => handleTransferCheckboxChange(0)}
              checked={selectedTransfers.includes(0)}
            /> Без пересадок
          </div>
          <div className={style.transfer}>
            <Checkbox
              onChange={() => handleTransferCheckboxChange(1)}
              checked={selectedTransfers.includes(1)}
            /> 1 пересадка
          </div>
          <div className={style.transfer}>
            <Checkbox
              onChange={() => handleTransferCheckboxChange(2)}
              checked={selectedTransfers.includes(2)}
            /> 2 пересадки
          </div>
          <div className={style.transfer}>
            <Checkbox
              onChange={() => handleTransferCheckboxChange(3)}
              checked={selectedTransfers.includes(3)}
            /> 3 пересадки
          </div>
        </div>
      </div>
    </div>
  );
};
