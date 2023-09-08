import { Injectable } from '@angular/core';
import { Subscribe } from '../models/subscribe';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class SubscribersService {
  constructor(private afs: AngularFirestore) {}

  addSubscription(subData: Subscribe) {
    this.afs
      .collection('subscribers')
      .add(subData)
      .then(() => {
        console.log('Subscriber saved');
      });
  }

  checkSubscribers(subEmail: string) {
    return this.afs
      .collection('subscribers', (ref) => ref.where('email', '==', subEmail))
      .get();
  }
}
