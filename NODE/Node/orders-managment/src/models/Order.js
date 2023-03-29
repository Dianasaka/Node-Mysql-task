export class Order {
    //to do: prideti read only and private
    id;
    name;
    orderedAt;
    completedAt;
    products; //ProductId[]
    totalPrice;

    constructor(id, name, orderedAt, completedAt, products, totalPrice) { //initId, initName,...
        this.id = id;
        this.name = name;
        this.orderedAt = orderedAt;
        this.products = products;
        this.totalPrice = totalPrice;
    }
}
