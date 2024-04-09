import React, { useEffect } from 'react';
import GuestLayout from '../../layouts/GuestLayout';
import { useState } from 'react';
import { FormControl, FormControlLabel, FormControlLabelText, Input, InputField, FormControlHelper, FormControlHelperText, ButtonText, ButtonIcon, Button, AddIcon, Card, Heading } from '@gluestack-ui/themed';
import { User } from '../../interfaces/User.interface';
import usersService from '../../services/users.service';

export default function AddUser() {
  const [user, setUser] = useState({ name: '', email: '' } as User);

  function handleChange(e: Event, key: string): void {
    setUser({ ...user, [key]: e.target.value });
  }

  async function addUser(): void {
    return await usersService.addUser(user);
  }

  return (
    <GuestLayout>
      <Card size="md" variant="elevated" m="$3">
        <Heading mb="$1" size="md">
          Ajouter un utilisateur
        </Heading>
        <FormControl minWidth="$80">
          <FormControlLabel>
            <FormControlLabelText>Name</FormControlLabelText>
          </FormControlLabel>
          <Input name="name">
            <InputField onChange={(e: Event) => handleChange(e, "name")} />
          </Input>
        </FormControl>
        <FormControl minWidth="$80">
          <FormControlLabel>
            <FormControlLabelText>Email</FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField onChange={(e: Event) => handleChange(e, "email")} />
          </Input>
        </FormControl>
        <Button
          size="md"
          variant="solid"
          onPress={addUser}
          action="primary"
          isDisabled={user.email === '' || user.name === ''}
          isFocusVisible={false}
        >
          <ButtonText>Add </ButtonText>
          <ButtonIcon as={AddIcon} />
        </Button>
      </Card>

    </GuestLayout>
  );
}
