import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../user.service";
import {User} from "../user";

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  users: User[];

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe( data => {
        this.users = data;
      });

      // this.users.forEach(element => {
      //   console.log(element);
      // });
  }

  onAbout(){
    console.log("Clicked About!!");
    this.router.navigate(['about']);
  }

  onContact(){
    console.log("Clicked Contact!!");
    this.router.navigate(['contact']);
  }

  deleteUser(user: User): void {
    this.userService.deleteUser(user.id)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
      })
  };

  editUser(user: User): void {
    localStorage.removeItem("editUserId");
    localStorage.setItem("editUserId", user.id.toString());
    this.router.navigate(['edit-user']);
  };

  addUser(): void {
    this.router.navigate(['add-user']);
  };
}