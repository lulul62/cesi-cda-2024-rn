import { User } from "../interfaces/User.interface";

export default {
  mapUserList(users: Array<User>): Array<User> {
    const usersList = users.map((user: User) => ({
      id: user?.id ? user.id : "N/A",
      name: user?.name ? user.name : "N/A",
      email: user?.email ? user.email : "N/A"
    }))
    return usersList;
  }
}