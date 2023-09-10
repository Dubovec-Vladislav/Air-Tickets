import React, { FC } from 'react'
import Button from '@mui/material/Button'
import { ButtonGroup } from '@mui/material'

interface ButtonGroupIndexProps {
  activeIndexOfFiltering: number,
  setActiveIndexOfFiltering: (newIndex: number) => void,
}

export const ButtonGroupFiltering: FC<ButtonGroupIndexProps> = ({ activeIndexOfFiltering, setActiveIndexOfFiltering }) => {

  const handleButtonClick = (index: number) => {
    setActiveIndexOfFiltering(index);
  };

  return (
    <ButtonGroup variant="outlined" aria-label="outlined button group">
      <Button
        variant="contained"
        color={activeIndexOfFiltering === 0 ? "primary" : "inherit"}
        onClick={() => handleButtonClick(0)}
      >
        По цене (max)
      </Button>
      <Button
        variant="contained"
        color={activeIndexOfFiltering === 1 ? "primary" : "inherit"}
        onClick={() => handleButtonClick(1)}
      >
        По цене (min)
      </Button>
      <Button
        variant="contained"
        color={activeIndexOfFiltering === 2 ? "primary" : "inherit"}
        onClick={() => handleButtonClick(2)}
      >
        По дате добавления
      </Button>
    </ButtonGroup>
  );
};
