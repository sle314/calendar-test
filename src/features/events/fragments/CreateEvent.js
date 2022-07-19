import styled from 'styled-components'

import { Button, Input } from 'core/ui'

import { useLocalization } from 'features/localization'

import { useCreateEvent } from '../hooks'

export const CreateEvent = () => {
  const { isSubmitting, handleSubmit, errors, startValidate, endValidate, register } =
    useCreateEvent()

  const { translations } = useLocalization()

  return (
    <StyledForm>
      <StyledInputsDiv>
        <StyledLabel htmlFor="name">
          <StyledLabelDiv>{translations.eventNameLabel}</StyledLabelDiv>
          <Input id="name" {...register('name', { required: true })} />
          {errors.name && errors.name.type === 'required' && (
            <StyledErrorDiv>{translations.eventNameRequired}</StyledErrorDiv>
          )}
        </StyledLabel>
        <StyledLabel htmlFor="start">
          <StyledLabelDiv>{translations.eventStartLabel}</StyledLabelDiv>
          <Input
            id="start"
            type="datetime-local"
            {...register('start', { required: true, validate: startValidate })}
          />
          {errors.start && errors.start.type === 'validate' && (
            <StyledErrorDiv>{translations.eventStartValidation}</StyledErrorDiv>
          )}
          {errors.start && errors.start.type === 'required' && (
            <StyledErrorDiv>{translations.eventStartRequired}</StyledErrorDiv>
          )}
        </StyledLabel>
        <StyledLabel htmlFor="end">
          <StyledLabelDiv>{translations.eventEndLabel}</StyledLabelDiv>
          <Input
            id="end"
            type="datetime-local"
            {...register('end', { required: true, validate: endValidate })}
          />
          {errors.end && errors.end.type === 'validate' && (
            <StyledErrorDiv>{translations.eventEndValidation}</StyledErrorDiv>
          )}
          {errors.end && errors.end.type === 'required' && (
            <StyledErrorDiv>{translations.eventEndRequired}</StyledErrorDiv>
          )}
        </StyledLabel>
      </StyledInputsDiv>
      <StyledSubmitDiv>
        <Button onClick={!isSubmitting ? handleSubmit : undefined}>
          {!isSubmitting ? translations.submit : translations.submitting}
        </Button>
      </StyledSubmitDiv>
      {errors.api && <StyledErrorDiv>{errors.api.message}</StyledErrorDiv>}
    </StyledForm>
  )
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`

const StyledInputsDiv = styled.div`
  display: flex;
`

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: ${({ theme }) => `${theme.space.small} ${theme.space.small} ${theme.space.small} 0`};
  max-width: 220px;
`

const StyledLabelDiv = styled.div`
  margin-bottom: ${({ theme }) => theme.space.small};
`

const StyledErrorDiv = styled.div`
  color: red;
  margin-top: ${({ theme }) => theme.space.small};
  font-size: 1.2rem;
`

const StyledSubmitDiv = styled.div`
  display: flex;
  margin-top: ${({ theme }) => theme.space.small};
`
