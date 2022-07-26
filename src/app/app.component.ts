import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Explore_MarsaAlam';



  public userArray: User[] = [];
  constructor(private http: HttpClient){
    this.http.get('/assets/hotels_files/datafeed_hotels.csv', {responseType: 'text'})
    .subscribe(
        data => {
            let csvToRowArray = data.split("\n");
            for (let index = 1; index < csvToRowArray.length; index++) {
              let row = csvToRowArray[index].split(",");
              this.userArray.push(new User( parseInt( row[0], 10), row[1], row[2].trim()));
            }
            console.log(this.userArray);
        },
        error => {
            console.log(error);
        }
    );
  }
}

export class User{
  id: number;
  name: String;
  lastName: String;

  constructor(id: number, name: String, lastName: String){
    this.id = id;
    this.name = name;
    this.lastName = lastName;
  }

}
