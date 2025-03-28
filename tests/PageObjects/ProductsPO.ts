import { Locator, Page } from "@playwright/test"

export class ProductsPO {

    private name: string
    private price: string
    private description: string

    private readonly itemsContainer : Locator
    private readonly cartButton : Locator

    constructor(page: Page) {
        this.itemsContainer = page.locator("#inventory_container .inventory_item")
        this.cartButton = page.locator(".shopping_cart_link")
    }

    async getName() {
        return this.name
    }

    async getPrice() {
        return this.price
    }

    async getDescription() {
        return this.description
    }

    async clickOnCart() {
        await this.cartButton.click()
    }

    async selectOneRandomItemAndClickAddToCart() {
        const items = await this.itemsContainer.all()
        const randomIndex = Math.floor(Math.random() * items.length)
        const randomItem = items[randomIndex]
        this.name = await randomItem.locator(".inventory_item_name").innerText()
        this.price = await randomItem.locator(".inventory_item_price").innerText()
        this.description = await randomItem.locator(".inventory_item_desc").innerText()
        console.log(
            "Selected Name: " + this.name + "\n" +
            "Selected Price: " + this.price + "\n" +
            "Selected Description: " + this.description + "\n")
        await randomItem.getByRole("button", {name: "Add to cart"}).click()
    }
}