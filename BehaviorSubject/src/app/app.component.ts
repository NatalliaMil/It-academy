import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'BehaviorSubject';
  value = 0;

  ngOnInit() {
    let subject = new BehaviorSubject(0);
    function getRandom() {
      const newValue = Math.floor(Math.random() * 1000);
      subject.next(newValue);
    }
    setInterval(getRandom, 1000);

    subject
      .pipe(filter((el) => el >= 300 && el <= 700))
      .subscribe((value: any) => {
        this.value = value;
      });
  }
}
