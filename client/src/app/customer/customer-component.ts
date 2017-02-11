
import { Component } from '@angular/core';

@Component({
  selector: 'customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {

  customer = {
    currentIncome: 30000,
    pensionToday: 20000,
    pensionExpected: 2034,
    health: 'good'
  }

  messages = [];

  chatBotInput: string = '';

  respondToComment() {
    this.messages.push({ sender: 'me', message: this.chatBotInput });

    if (this.chatBotInput === 'I got married') {
      this.messages.push({
        sender: 'bot',
        message: 'Better start saving.'
      });
    } else if (this.chatBotInput === 'I changed jobs') {
      this.messages.push({
        sender: 'bot',
        message: 'Make it rain, son.'
      });
    } else {
      this.messages.push({
        sender: 'bot',
        message: 'I have no idea what you\'re saying'
      });
    }
    this.chatBotInput = '';
  }

}
