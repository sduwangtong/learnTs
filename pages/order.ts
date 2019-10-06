import { IOrder } from "./calculateTotalAmount";

export class Order implements IOrder {
    calculateTotal() {
        return 90;
    }
}