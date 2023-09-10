import React, { useState } from 'react'
import style from './app.module.scss'
import { SettingsBlock } from 'components/settings-block'
import { TicketsBlock } from 'components/tickets-block'

function App() {
  const [selectedTransfers, setSelectedTransfers] = useState<number[]>([0, 1, 2, 3]); // Состояние для выбранных пересадок
  const [activeIndexOFCurrency, setActiveIndexOFCurrency] = useState<number>(0)
  const [activeIndexOfFiltering, setActiveIndexOfFiltering] = useState<number>(0)

  return (
    <div className={style.wrapper}>
      <SettingsBlock
        selectedTransfers={selectedTransfers}
        setSelectedTransfers={setSelectedTransfers}
        activeIndexOFCurrency={activeIndexOFCurrency}
        setActiveIndexOFCurrency={setActiveIndexOFCurrency}
        activeIndexOfFiltering={activeIndexOfFiltering}
        setActiveIndexOfFiltering={setActiveIndexOfFiltering}
      />
      <TicketsBlock selectedTransfers={selectedTransfers} activeIndexOFCurrency={activeIndexOFCurrency} activeIndexOfFiltering={activeIndexOfFiltering}/>
    </div>
  );
}

export default App;
