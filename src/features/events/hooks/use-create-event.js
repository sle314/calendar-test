import { useCallback } from 'react'
import { useForm } from 'react-hook-form'

import { useEvents } from './use-events'

export const useCreateEvent = () => {
  const { createEvent, creating } = useEvents()
  const {
    clearErrors,
    formState: { errors },
    getValues,
    handleSubmit,
    register,
    reset,
    setError,
  } = useForm()

  const onSubmit = useCallback(
    async data => {
      if (creating) {
        return
      }

      const updatedData = { ...data }
      updatedData.start = `${updatedData.start}:00.000+0200`
      updatedData.end = `${updatedData.end}:00.000+0200`

      const created = await createEvent(updatedData)

      if (created) {
        reset()
      } else {
        setError('api', { message: 'Something went wrong, please try again.' })
      }
    },
    [createEvent, creating, setError, reset],
  )

  const handleSubmitForm = useCallback(
    data => {
      clearErrors('api')
      handleSubmit(onSubmit)(data)
    },
    [clearErrors, handleSubmit, onSubmit],
  )

  const startValidate = useCallback(v => !getValues().end || v <= getValues().end, [getValues])
  const endValidate = useCallback(v => !getValues().start || v >= getValues().start, [getValues])

  return {
    isSubmitting: creating,
    handleSubmit: handleSubmitForm,
    errors,
    startValidate,
    endValidate,
    register,
  }
}
