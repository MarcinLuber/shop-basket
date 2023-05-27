class Basket {
    constructor() {
        this.items = this.loadToLocalStorage();
    }

    clear() {
        this.items.length = 0;
        this.saveToLocalStorage()
        // this.items.splice(0);
        // this.items = [];
    }

    add(item) {
        this.items.push(item);
        this.saveToLocalStorage()
    }

    getTotalValue() {
        return this.items.reduce((prev, product) => prev + product.price, 0);
    }

    getBasketSummary() {
        return this.items
            .map((product, i) => {
                return {
                    id: i + 1,
                    text: `${i + 1} - ${product.name} - ${product.price.toFixed(2)}zł.`,
                };
            });
    }

    remove(no) {
        this.items.splice(no - 1, 1);
        this.saveToLocalStorage()
    }


saveToLocalStorage() {
    localStorage.setItem('basket-items', JSON.stringify(this.items));
}

loadToLocalStorage(){
    const itemJson = localStorage.getItem('basket-items');
    
    if (itemJson === null){
        return[];
    }else{
    return JSON.parse(itemJson);
    }
}

}


class Product {
    constructor(productName, productPrice) {
        this.name = productName;
        this.price = productPrice;
    }

    setNewPrice(newPrice) {
        this.price = newPrice;
    }
}