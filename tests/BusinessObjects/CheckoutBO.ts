import { expect, Page } from "@playwright/test"
import { CheckoutPO } from "../PageObjects/CheckoutPO"

export class CheckoutBO {

    name: string
    price: string
    description: string

    private checkoutPO: CheckoutPO
    private page: Page 
   
    constructor(page: Page) {
        this.page = page
        this.checkoutPO = new CheckoutPO(page)
    }

    async getName() {
        return this.name
    }

    async setName() {
        this.name = await this.checkoutPO.getName()
    }

    async setPrice() {
        this.price = await this.checkoutPO.getPrice()
    }

    async setDescription() {
        this.description = await this.checkoutPO.getDescription()
    }

    async clickOnCheckout() {
        await this.checkoutPO.clickOnCheckout()
    }

    async verifyCheckoutItemInfo(expectedName: string, expectedPrice: string, expectedDescription: string) {
        await this.page.screenshot({path: 'screenshots/CheckoutItem.png', fullPage: true})
        await this.setName() 
        await this.setPrice()
        await this.setDescription()
        console.log(
            "Checkout Name: " + this.name + "\n" +
            "Checkout Price: " + this.price + "\n" +
            "Checkout Description: " + this.description + "\n")
        expect(expectedName).toEqual(this.name)
        expect(expectedPrice).toEqual(this.price)
        expect(expectedDescription).toEqual(this.description)
    }
}