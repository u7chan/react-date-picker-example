import { FC } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { useForm, Controller } from "react-hook-form"

type Form = {
  name: string
  inputDate: Date
}

const App: FC = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>()
  const onSubmit = (data: Form) => {
    const sendData = {
      name: data.name ?? "",
      inputDate: data.inputDate.toISOString(),
    }
    alert(JSON.stringify(sendData, null, 2))
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div style={{ display: "grid", justifyContent: "center" }}>
        <div>
          <input
            type="text"
            {...register("name", { required: true })}
            placeholder="name"
          />
        </div>
        {errors.name && (
          <span style={{ fontSize: "0.8em", color: "red" }}>*Required</span>
        )}
        <Controller
          control={control}
          name="inputDate"
          rules={{ required: true }}
          render={({ field }) => (
            <DatePicker
              dateFormat="yyyy/MM/dd HH:mm"
              showTimeSelect
              selected={field.value}
              onChange={(date) => field.onChange(date)}
              placeholderText="inputDate"
              customInput={<input type="text" />}
            />
          )}
        />
        {errors.inputDate && (
          <span style={{ fontSize: "0.8em", color: "red" }}>*Required</span>
        )}
        <input type="submit" value="Save" />
      </div>
    </form>
  )
}

export default App
