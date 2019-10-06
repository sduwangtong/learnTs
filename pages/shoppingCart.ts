import { IOrder } from "./calculateTotalAmount";

export class ShoppingCart implements IOrder{
    calculateTotal() {
        return 100;
    }
}