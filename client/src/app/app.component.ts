import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  data = {};
  constructor(private http: HttpClient)
  {
    this.http.get("https://5000-elshahatkha-angulardock-zlk5kex95gn.ws-eu111.gitpod.io/simple_json")
    .subscribe(
      (data) => 
      {
        this.data = data;
        console.log(data);
      }
    )
  }
}