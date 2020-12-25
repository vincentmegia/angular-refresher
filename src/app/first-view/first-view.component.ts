import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-first-view',
  templateUrl: './first-view.component.html',
  styleUrls: ['./first-view.component.css']
})
export class FirstViewComponent implements OnInit {
    producer$: Observable<string> = new Observable<string>();
    label: string = "";

  constructor() {
      this.generateProducer();
   }

  ngOnInit(): void {

  }

  generateProducer(): void {
      this.producer$ = new Observable(subs => {
          for (var i = 0; i <= 10000; i++) {
              subs.next(i.toString());
          }
          subs.complete();
      })
  }

  onClick(): void{
    this.producer$.subscribe(item => {
        setInterval(() => {
            this.label = item;
        }, 1000);
    });
  }
}
