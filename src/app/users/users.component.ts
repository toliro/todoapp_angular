import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  title = 'my-app';

  searchText : string;

  userData = [
    {
        id: "1",
        firstname: "Rolito",
        lastname: "Valles",
        occupation:"Web Developer",
        profile_picture: "https://unsplash.com/photos/P2FNYWOlgZs"
    },
    {
        id: "2",
        firstname: "Riche",
        lastname: "Jimenez",
        occupation:"Web Developer",
        profile_picture: "https://unsplash.com/photos/JAkWUtmsFXM"
    },
    {
        id: "3",
        firstname: "Karen",
        lastname: "Carabuena",
        occupation:"Software Engineer",
        profile_picture: "https://unsplash.com/photos/4Qa0A7o8Wsg"
    },
    {
        id: "4",
        firstname: "Vannessa",
        lastname: "Pasaan",
        occupation:"Software Test Engineer",
        profile_picture: "https://unsplash.com/photos/pNrMhpntZFM"
    },
    {
        id: "5",
        firstname: "Adrian",
        lastname: "Sumagang",
        occupation:"Web Developer",
        profile_picture: "https://unsplash.com/photos/NorYfP4rwmQ"
    },
    {
        id: "6",
        firstname: "Jayson",
        lastname: "Custodio",
        occupation:"Software Developer",
        profile_picture: "https://unsplash.com/photos/XxJ_HIXw25M"
    },
    {
        id: "7",
        firstname: "Jan Carlo",
        lastname: "Nabaja",
        occupation:"Web Developer",
        profile_picture: "https://unsplash.com/photos/sRYaHTzPGfU"
    },
    {
        id: "8",
        firstname: "Winzel",
        lastname: "Del Rosario",
        occupation:"Software Developer",
        profile_picture: "https://unsplash.com/photos/X2YO8KFxgEM"
    },
    {
        id: "9",
        firstname: "Lovely",
        lastname: "Canales",
        occupation:"Web Developer",
        profile_picture: "https://unsplash.com/photos/dLFgkoUuoac"
    },
    {
        id: "10",
        firstname: "Jemalyn",
        lastname: "Goyo",
        occupation:"Web Developer",
        profile_picture: "https://unsplash.com/photos/ua9bUXzUUpw"
    }
  ]

  filteredData: any[];

  constructor(){
    this.filteredData = this.userData;
  }
  
  ngOnInit(){

  }

  onSearch(){
    console.log(this.searchText);

    const searchText = this.searchText.toLocaleLowerCase();

    if(this.searchText){
      this.filteredData = this.userData.filter((users)=>{
        return users.firstname.toLowerCase().includes(this.searchText) || 
        users.lastname.toLowerCase().includes(this.searchText) ||
        users.occupation.toLowerCase().includes(this.searchText)
      })
    }else{
      this.filteredData = this.userData;
    }
    
  }

  onUpdate(users){
    console.log("update");
    console.log(users);
  }

  onDelete(users){
    console.log("delete");
    console.log(users);
  }


}