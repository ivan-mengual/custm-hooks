import { useEffect, useState } from "react"


export const useForm = (initialForm = {}) => {
  
  const [formState, setFormState] = useState(initialForm)

  useEffect(() => {
    console.log('UseForm.useEffect', formState)
  }, [formState])
  
  const onResetForm = () => {
    setFormState(initialForm)
  }

  const onInputChange = ({target}) => {
    console.log('onInputChange', target)
    const {name, value} = target
    setFormState({
      ...formState,
      [name]: value
    })
  }


  return {
    onResetForm,
    ...formState,
    formState,
    onInputChange
  }
}
