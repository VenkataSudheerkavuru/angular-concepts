import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { MyServiceExampleService } from '../my-service-example.service';

@Component({
  selector: 'app-interpolation-example',
  templateUrl: './interpolation-example.component.html',
  styleUrls: ['./interpolation-example.component.css']
})
export class InterpolationExampleComponent implements OnInit{
    title = 'Interpolation Example';
    today = new Date();
    name: string = 'John';
  serviceMessage : String ="";
  items: string[] = ['Apple', 'Banana', 'Cherry'];
  color: string = 'red';
  data: any[] = [];
  @Input() parentMessage!: string;

  constructor(private myService: MyServiceExampleService) {
  }
  ngOnInit() {
    this.serviceMessage=this.myService.getServiceMessage();
    this.myService.getPosts().subscribe((data)=>{
      this.data = data;
    })
    this.myService.getPosts().subscribe({
      next: (data) => {
        this.data = data;
      },
      error: (error) => {
        console.error('There was an error!', error);
      }
    });
  }
  updateServiceMessage(message : string) {
    this.myService.setServiceMessage(message);
    this.serviceMessage=this.myService.getServiceMessage();
  }
    greet():string{
        return 'Hello';
    }
    calc(a:number, b:number):number{
        return a + b;
    }
    @Output() messageEvent = new EventEmitter<string>();//emits event to parent
    sendMessage() {
    this.messageEvent.emit("hello i am from child")
  }


}
