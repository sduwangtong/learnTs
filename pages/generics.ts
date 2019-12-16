// define it inside of an arrow 
export function genericFunction<T>(x: T) : T {
    return x;
}

// Generic Interface
export interface GenericInterface<T> {
    <U>(a: U) : U;
    someProp:T;
}

// Use the thing inside of an arrow to describe the type
// only for instance variable memeber 
// this is not for static method or variable member
export class GenericClass<P> {
    constructor(public props: P) {}

    getProps() : P {
        return this.props;
    }
} 


interface Expirable {
    expiryDate: Date;
}

interface ChocolateCake extends Expirable {}
interface VaillaCake extends Expirable {}

const chocolateCakes: ChocolateCake[] = [
    {expiryDate: new Date()}
]
const vanillaCakes: VaillaCake[] = [
    {expiryDate: new Date()}
]
// we specify they type of item by using Generics
const getExpiredItems = <T extends Expirable>(items: Array<T>) => {
    const currentDate = new Date().getTime();
    return items.filter(item => item.expiryDate.getDate() < currentDate); 
}

export const expiredChocoCakes = getExpiredItems<ChocolateCake>(chocolateCakes);
export const expiredVanillaCakes = getExpiredItems<VaillaCake>(vanillaCakes);

interface GetExpiredItemsFunction {
    <T extends Expirable> (items: Array<T>) : Array<T>;
}
// function extends an interface
export const getExpiredItemWithInterface: GetExpiredItemsFunction = (items) => {
    const currentDate = new Date().getTime();
    return items.filter(item => item.expiryDate.getDate() < currentDate); 
}

// interface with two generics 
interface ShoppingCart<ItemId, Item> {
    items: Array<Item>,
    addItem (this: ShoppingCart<ItemId, Item>, item: Item) : void;
    getItemById(this: ShoppingCart<ItemId, Item>, id: ItemId) : Item | undefined;
}

interface Item {
    id: number;
    price: number;
}
export const cart: ShoppingCart<number, Item> = {
    items: [],
    addItem(item) {
        this.items.push(item);
    },
    getItemById(id) {
        return this.items.find(item => item.id === id);
    }
}