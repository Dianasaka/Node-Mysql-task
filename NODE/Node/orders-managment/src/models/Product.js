import joi from "joi";

const productSchema = joi.object({
    name: joi.string(),
    price: joi.number(),
    isAvailable: joi.boolean(),
    imageURL: joi.string()
});

export class Product {
    id;
    name;
    price;
    isAvailable;
    imageURL;

    constructor(id, name, price, isAvailable, imageURL) {
        const newProductData = { name, price, isAvailable, imageURL }

        const validationResult = productSchema.validate(newProductData);



        this.id = id;
        this.name = name;
        this.price = price;
        this.isAvailable = isAvailable;
        this.imageURL = imageURL;
    }
}
