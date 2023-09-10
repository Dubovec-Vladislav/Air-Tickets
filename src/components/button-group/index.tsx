import React, { FC, useState } from 'react';
import Button from '@mui/material/Button';
import { ButtonGroup } from '@mui/material';

export const ButtonGroupComponent: FC = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleButtonClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <ButtonGroup variant="outlined" aria-label="outlined button group">
      <Button
        variant="contained"
        color={activeIndex === 0 ? "primary" : "inherit"}
        onClick={() => handleButtonClick(0)}
      >
        RUB
      </Button>
      <Button
        variant="contained"
        color={activeIndex === 1 ? "primary" : "inherit"}
        onClick={() => handleButtonClick(1)}
      >
        USD
      </Button>
      <Button
        variant="contained"
        color={activeIndex === 2 ? "primary" : "inherit"}
        onClick={() => handleButtonClick(2)}
      >
        EUR
      </Button>
    </ButtonGroup>
  );
};
