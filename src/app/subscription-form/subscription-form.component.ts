import { Component, OnInit } from '@angular/core';
import { Subscribe } from '../models/subscribe';
import { SubscribersService } from '../services/subscribers.service';

@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.css'],
})
export class SubscriptionFormComponent implements OnInit {
  isEmailError: boolean = false;
  isSubscribed: boolean = false;

  constructor(private subscribeService: SubscribersService) {}

  ngOnInit(): void {}

  onSubmit(formValue: any) {
    const subData: Subscribe = {
      name: formValue.name,
      email: formValue.email,
    };
    //this.subscribeService.addSubscription(subData);
    this.subscribeService.checkSubscribers(subData.email).subscribe((val) => {
      console.log(val);
      if (val.empty) {
        this.subscribeService.addSubscription(subData);
        this.isSubscribed = true;
      } else {
        console.log('Email already exists');
        this.isEmailError = true;
      }
    });
  }
}
