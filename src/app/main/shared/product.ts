export class Product {
    name: String;
    price: String;
    description: String;
    photos: {
        image1: String,
        image2: String,
        image3: String
    }

    constructor(name, price, description, image1, image2, image3) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.photos.image1 = image1;
        this.photos.image2 = image2;
        this.photos.image3 = image3;
    }
}