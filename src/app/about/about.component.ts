import { Component, OnInit, AfterViewInit,ViewChild } from '@angular/core';

import {MatTableDataSource,MatPaginator,MatSort} from '@angular/material';

import {Element} from '../element';

import {UserService} from '../user.service';


const ELEMENT_DATA: Element[] = [
  {id: 1, firstName: 'John', lastName: 'Doe', email: 'john@gmail.com'},
  {id: 2, firstName: 'Mike', lastName: 'Hussey', email: 'mike@gmail.com'},
  {id: 3, firstName: 'Ricky', lastName: 'Hans', email: 'ricky@gmail.com'},
  {id: 4, firstName: 'Martin', lastName: 'Kos', email: 'martin@gmail.com'},
  {id: 5, firstName: 'Tom', lastName: 'Paisa', email: 'tom@gmail.com'}
];

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, AfterViewInit {

  constructor(private userService : UserService) { }

  @ViewChild(MatPaginator) 
  paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.userService.getUsers()
      .subscribe( data => {
        this.dataSource.data = data;
      });
  
  }

  displayedColumns = ['id', 'firstName', 'lastName', 'email'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  rowClicked(row: any): void {
    console.log(row);
  }
}




