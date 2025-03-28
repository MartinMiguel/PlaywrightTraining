import { Page } from "@playwright/test"
import { ProductsPO } from "../PageObjects/ProductsPO"

export class ProductsBO {

    name: string
    price: string
    description: string

    private page: Page
    private productsPO: ProductsPO 
   
    constructor(page: Page) {
        this.page = page
        this.productsPO = new ProductsPO(page)
    }

    async setName(){
        this.name = await this.productsPO.getName()
    }

    async setPrice(){
        this.price = await this.productsPO.getPrice()
    }

    async setDescription(){
        this.description = await this.productsPO.getDescription()
    }

    async addOneRandomItemToTheCart() {
        await this.productsPO.selectOneRandomItemAndClickAddToCart()
        await this.page.screenshot({path: 'screenshots/RandomItemAddedToCart.png', fullPage: true})
        await this.setName()
        await this.setPrice()
        await this.setDescription()
    }

    async clickOnCart() {
        await this.productsPO.clickOnCart()
    }
}