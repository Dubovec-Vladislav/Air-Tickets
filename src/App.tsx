import React, { useState } from 'react'
import { SettingsBlock } from 'components/settings-block'
import style from './app.module.scss'
import { TicketsBlock } from 'components/tickets-block'

function App() {
  const [selectedTransfers, setSelectedTransfers] = useState<number[]>([0, 1, 2, 3]); // Состояние для выбранных пересадок

  return (
    <div className={style.wrapper}>
      <SettingsBlock selectedTransfers={selectedTransfers} setSelectedTransfers={setSelectedTransfers} />
      <TicketsBlock selectedTransfers={selectedTransfers} />
    </div>
  );
}

export default App;
