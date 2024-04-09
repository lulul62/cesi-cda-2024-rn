import AsyncStorage from "@react-native-async-storage/async-storage";
import { User } from "../interfaces/User.interface";

export async function handleNewUser(user: User): Promise<void> {
    const usersExists = await AsyncStorage.getItem('users');
    if (usersExists) {
        const parsedUsers: Array<User> = JSON.parse(usersExists);
        const mergedUsers: Array<User> = [...parsedUsers, user]
        return await AsyncStorage.setItem("users", JSON.stringify(mergedUsers))
    }
    const stringifiedUser: string = JSON.stringify([user]);
    return await AsyncStorage.setItem("users", stringifiedUser)
} 

export async function getUsersFromAsyncStorage(): Promise<Array<User>> {
    const users: Array<User> = await AsyncStorage.getItem('users');
    if(!users) {
      return [];
    }
    return JSON.parse(users)
  }
