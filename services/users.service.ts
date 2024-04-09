import AsyncStorage from "@react-native-async-storage/async-storage";
import { getUsers, getUserById } from "../clients/jsonPlaceholder.client";
import { User } from "../interfaces/User.interface";
import { customLogger } from "../logger";
import usersMapper from "../mapper/users.mapper";
import { handleNewUser, getUsersFromAsyncStorage } from "../providers/asyncStorage.provider";

export default {
  getUsers: async (): Promise<Array<User>> => {
    try {
      customLogger.info("Getting users");
      const users: Array<User> = await getUsers();
      return usersMapper.mapUserList(users);
    }
    catch (error) {
      customLogger.error(`Error getting users: ${error}`);
      throw new Error(`Error getting users: ${error}`)
    }
  },
  getUsersFromAsyncStorage: async (): Promise<Array<User>> => {
    try {
      customLogger.info("Getting users from async storage");
      return getUsersFromAsyncStorage();
    }
    catch (error) {
      customLogger.error(`Error getting users from async storage: ${error}`);
      throw new Error(`Error getting users from async storage: ${error}`)
    }
  },
  getUserById: async (id: string): Promise<User> => {
    try {
      customLogger.info(`Getting user by id: ${id}`);
      return getUserById(id);
    }
    catch (error) {
      customLogger.error(`Error getting user by id: ${error}`);
      throw new Error(`Error getting user by id: ${error}`)
    }
  },
  addUser: async (user: User): Promise<void> => {
    try {
      customLogger.info(`Adding user: ${user.email}`);
      await handleNewUser(user);
    } catch (error) {
      customLogger.error(`Error while adding user: ${error}`);
      throw new Error(`Error while adding user`)
    }
  }
}