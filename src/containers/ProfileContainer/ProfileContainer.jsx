import React, { useContext, useEffect } from 'react';

import { Profile } from '../../components';
import { AuthContext, CurrentUserContext } from '../../contexts';
import { useForm } from '../../hooks';
import { HeaderContainer } from '../HeaderContainer';

export function ProfileContainer() {
  const { onChangeProfile } = useContext(AuthContext);

  const user = useContext(CurrentUserContext);
  const { name, email } = user;

  const { values, handleChange, resetForm, errors } = useForm({});

  const handleSubmit = e => {
    e.preventDefault();
    onChangeProfile(values);
  };

  useEffect(() => {
    if (user) {
      resetForm(user, {});
    }
  }, [user, resetForm]);

  const isNotValues = name === values.name && email === values.email;

  const isDisabled = !!errors.name || !!errors.email || !!isNotValues;

  const isInutErrorName = !!errors.name;
  const isInutErrorEmail = !!errors.email;

  return (
    <Profile
      header={<HeaderContainer />}
      isDisabled={isDisabled}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      values={values}
      errors={errors}
      isInutErrorName={isInutErrorName}
      isInutErrorEmail={isInutErrorEmail}
    />
  );
}
