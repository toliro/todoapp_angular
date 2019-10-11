import { Injectable } from '@angular/core';
import { Users } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  private user: Users[] = [
    {
        id: "1",
        firstname: "Rolito",
        lastname: "Valles",
        occupation:"Web Developer",
        profile: "https://unsplash.com/photos/P2FNYWOlgZs"
    },
    {
        id: "2",
        firstname: "Riche",
        lastname: "Jimenez",
        occupation:"Web Developer",
        profile: "https://unsplash.com/photos/JAkWUtmsFXM"
    },
    {
        id: "3",
        firstname: "Karen",
        lastname: "Carabuena",
        occupation:"Software Engineer",
        profile: "https://unsplash.com/photos/4Qa0A7o8Wsg"
    },
    {
        id: "4",
        firstname: "Vannessa",
        lastname: "Pasaan",
        occupation:"Software Test Engineer",
        profile: "https://unsplash.com/photos/pNrMhpntZFM"
    },
    {
        id: "5",
        firstname: "Adrian",
        lastname: "Sumagang",
        occupation:"Web Developer",
        profile: "https://unsplash.com/photos/NorYfP4rwmQ"
    },
    {
        id: "6",
        firstname: "Jayson",
        lastname: "Custodio",
        occupation:"Software Developer",
        profile: "https://unsplash.com/photos/XxJ_HIXw25M"
    },
    {
        id: "7",
        firstname: "Jan Carlo",
        lastname: "Nabaja",
        occupation:"Web Developer",
        profile: "https://unsplash.com/photos/sRYaHTzPGfU"
    },
    {
        id: "8",
        firstname: "Winzel",
        lastname: "Del Rosario",
        occupation:"Software Developer",
        profile: "https://unsplash.com/photos/X2YO8KFxgEM"
    },
    {
        id: "9",
        firstname: "Lovely",
        lastname: "Canales",
        occupation:"Web Developer",
        profile: "https://unsplash.com/photos/dLFgkoUuoac"
    },
    {
        id: "10",
        firstname: "Jemalyn",
        lastname: "Goyo",
        occupation:"Web Developer",
        profile: "https://unsplash.com/photos/ua9bUXzUUpw"
    }
  ]

  getAllUsers(): Users[]{
    return this.user;
  }

  getPageUsers(page: number, pageSize: number): Users[] {
    return this.user.slice((page - 1) * pageSize, page * pageSize);
  }


  addUser(user: Users): Users {
    //increment id with the id of the last element
    var userId: string = (
      parseInt(this.user[this.user.length - 1].id) + 1
    ).toString();
    user.id = userId;
    this.user.push(user);
    return user;
  }

  deleteUser(id: string): Users {
    const userId = this.findUser(id);
    const index = this.user.indexOf(userId);
    return userId ? this.user.splice(index, 1)[0] : null;
  }

  updateUser(user: Users): Users {
    const findUser = this.findUser(user.id);
    findUser.firstname = user.firstname;
    findUser.lastname = user.lastname;
    findUser.occupation = user.occupation;
    findUser.profile= user.profile;
    return findUser;
  }

  findUser(id: string): Users {
    const findUser = this.user.filter(userToFind => {
      return userToFind.id === id;
    });
    return findUser[0];
  }

  getFilteredUsers(page: number,pageSize: number,searchText: string): Users[] {
    const filteredUsers = this.user.filter(user => {
      return (
        user.firstname.toLowerCase().includes(searchText) ||
        user.lastname.toLowerCase().includes(searchText) ||
        user.occupation.toLowerCase().includes(searchText)
      );
    });
    return filteredUsers.slice((page - 1) * pageSize, page * pageSize);
  }

}

