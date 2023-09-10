import React, { FC } from 'react'
import Button from '@mui/material/Button'
import { ButtonGroup } from '@mui/material'

interface ButtonGroupCurrencyProps {
  activeIndexOFCurrency: number,
  setActiveIndexOFCurrency: (newIndex: number) => void,
}

export const ButtonGroupCurrency: FC<ButtonGroupCurrencyProps> = ({ activeIndexOFCurrency, setActiveIndexOFCurrency }) => {

  const handleButtonClick = (index: number) => {
    setActiveIndexOFCurrency(index);
  };

  return (
    <ButtonGroup variant="outlined" aria-label="outlined button group">
      <Button
        variant="contained"
        color={activeIndexOFCurrency === 0 ? "primary" : "inherit"}
        onClick={() => handleButtonClick(0)}
      >
        RUB
      </Button>
      <Button
        variant="contained"
        color={activeIndexOFCurrency === 1 ? "primary" : "inherit"}
        onClick={() => handleButtonClick(1)}
      >
        USD
      </Button>
      <Button
        variant="contained"
        color={activeIndexOFCurrency === 2 ? "primary" : "inherit"}
        onClick={() => handleButtonClick(2)}
      >
        EUR
      </Button>
    </ButtonGroup>
  );
};
