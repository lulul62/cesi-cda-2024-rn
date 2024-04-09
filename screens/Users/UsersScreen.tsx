import React, { useEffect } from 'react';
import { Text } from '../../components/Themed';
import { Button, Image, ButtonText, Card, Heading, LinkText } from '@gluestack-ui/themed';
import GuestLayout from '../../layouts/GuestLayout';
import { useState } from 'react';
import usersService from '../../services/users.service';
import { User } from '../../interfaces/User.interface';
import { Link } from 'expo-router';


export default function UsersScreen() {
  const [users, setUsers] = useState([]);

  async function getUsers(): void {
    const users: Array<User> = await usersService.getUsers();
    const usersFromStorage: Array<User> = await usersService.getUsersFromAsyncStorage();
    const mergedUsers = [...users, ...usersFromStorage];
    setUsers(mergedUsers as Array<User>);
  }

  async function deleteUser(id: string): void {
    const position = users.map(user => user.name).indexOf(id);
    const newUsers = users.map(user => user);
    newUsers.splice(position, 1);
    await usersService.handleUserDeletion(id);
    setUsers(newUsers);
  }

  function showUsers() {
    return users.map((user: any) => {
      return (
        <Card p="$5" borderRadius="$lg" maxWidth={360} m="$3">
          <Image
            mb="$6"
            h={240}
            width="$full"
            borderRadius="$md"
            source={{
              uri: "https://random.imagecdn.app/500/150",
            }}
          />
          <Text
            fontSize="$sm"
            fontStyle="normal"
            fontFamily="$heading"
            fontWeight="$normal"
            lineHeight="$sm"
            mb="$2"
            sx={{
              color: "$textLight700",
              _dark: {
                color: "$textDark200",
              },
            }}
          >
            {user.id}
          </Text>
          <Heading size="md" fontFamily="$heading" mb="$4">
            {user.name}
          </Heading>
          <Button
            size="md"
            variant="solid"
            action="primary"
            isDisabled={false}
            isFocusVisible={false}
          >
            <ButtonText>See</ButtonText>
          </Button>
          <Button
            size="md"
            variant="solid"
            action="primary"
            isDisabled={false}
            onPress={() => deleteUser(user.name)}
            isFocusVisible={false}
          >
            <ButtonText>Delete</ButtonText>
          </Button>
        </Card>
      )
    })
  }

  useEffect(() => { getUsers(); }, []);
  return (
    <GuestLayout>
      <Button
        size="md"
        variant="solid"
        action="primary"
        isFocusVisible={false}
      >
        <ButtonText><Link href="/add-user"><LinkText>Ajouter un utilisateur</LinkText></Link> </ButtonText>
      </Button>

      {showUsers()}
    </GuestLayout>
  );
}