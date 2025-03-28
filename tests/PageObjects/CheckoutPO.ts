import { Locator, Page } from "@playwright/test"

export class CheckoutPO {

    private readonly checkoutButton : Locator
    private readonly nameText : Locator
    private readonly priceText : Locator
    private readonly descriptionText : Locator

    constructor(page: Page) {
        this.nameText = page.locator(".inventory_item_name")
        this.priceText = page.locator(".inventory_item_price")
        this.descriptionText = page.locator(".inventory_item_desc")
        this.checkoutButton = page.getByRole("button", {name: "Checkout"})
    }

    async getName() {
        return await this.nameText.innerText()
    }

    async getPrice() {
        return await this.priceText.innerText()
    }

    async getDescription() {
        return await this.descriptionText.innerText()
    }

    async clickOnCheckout() {
        await this.checkoutButton.click()
    }
}