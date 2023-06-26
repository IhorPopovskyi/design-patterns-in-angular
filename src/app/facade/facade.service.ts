import { Injectable } from '@angular/core';

// user.service.ts
@Injectable({
  providedIn: 'root'
})
class UserService {
  getUserInfo(): string {
    return 'Lord Vader';
  }
}

// order.service.ts
@Injectable({
  providedIn: 'root'
})
class OrderService {
  getArticle(): string {
    return "Death Star";
  }

  getAddress(): string {
    return "Coruscant";
  }

  getPrice(): string {
    return "$850 quadrillion";
  }
}

// payment.service.ts
@Injectable({
  providedIn: 'root'
})
class PaymentService {
  makePayment(): void {
    // Simulating complex logic to make a payment
    console.log("Order processed successfully!");
  }
}

// facade.service.ts
@Injectable({
  providedIn: 'root'
})
export class FacadeService {
  constructor(
    private userService: UserService,
    private orderService: OrderService,
    private paymentService: PaymentService
  ) {}

  processOrder(): void {
    const userInfo = this.userService.getUserInfo();
    const article = this.orderService.getArticle();
    const address = this.orderService.getAddress();
    const price = this.orderService.getPrice();
    console.log("Processing order...");
    this.paymentService.makePayment();
    console.log("Order summary:");
    console.table({ userInfo, article, address, price });
  }
}
