import {JsonPlaceholderException} from "../exceptions/jsonPlaceholder.exception";
import {User} from "../interfaces/User.interface";
import {customLogger} from "../logger";
import {JSON_PLACEHOLDER_HOST} from "@env";

export async function getUsers(): Promise<Array<User>> {
    try {
      const usersRequest = await fetch(`${JSON_PLACEHOLDER_HOST}/users`);
      const usersList = await usersRequest.json();
      return usersList;
    }
    catch(error) {
      customLogger.error(`An external error occurred: ${JsonPlaceholderException.GET_USERS}`);
      throw new Error(`${JsonPlaceholderException.GET_USERS}: ${error}`)
    }
  }

  export async function getUserById(id: String): Promise<User> {
    try {
        const userRequest = await fetch(`${JSON_PLACEHOLDER_HOST}/users/${id}`);
        const user = await userRequest.json();
        return user;
      }
      catch(error) {
        customLogger.error(`An external error occurred: ${JsonPlaceholderException.GET_USERS}`);
        throw new Error(`${JsonPlaceholderException.GET_USER_BY_ID}: ${error}`)
      }
  }