import { FC, useState } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

const App: FC = () => {
  const [startDate, setStartDate] = useState(new Date())
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <DatePicker
          dateFormat="yyyy/MM/dd hh:mm"
          showTimeSelect
          selected={startDate}
          onChange={(date: Date) => setStartDate(date)}
        />
      </div>
    </div>
  )
}

export default App
