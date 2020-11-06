import React from 'react';
import {
  GroupContainer,
  FormInputContainer,
  FormInputLabelContainer,
} from './form-input.styles';

const FormInput = ({ handleChange, label, ...OtherProps }) => (
  <GroupContainer>
    <FormInputContainer onChange={handleChange} {...OtherProps} />
    {label ? (
      <FormInputLabelContainer
        className={`${
          OtherProps.value.length ? 'shrink' : ''
        } form-input-label`}
      >
        {label}
      </FormInputLabelContainer>
    ) : null}
  </GroupContainer>
);

export default FormInput;
