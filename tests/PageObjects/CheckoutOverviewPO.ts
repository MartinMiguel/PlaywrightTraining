import { Locator, Page } from "@playwright/test"

export class CheckoutOverviewPO {

    private page : Page
    private readonly finishButton : Locator
    private readonly nameText : Locator
    private readonly priceText : Locator
    private readonly descriptionText : Locator
    private readonly taxText : Locator

    constructor(page: Page) {
        this.page = page
        this.nameText = page.locator(".inventory_item_name")
        this.priceText = page.locator(".inventory_item_price")
        this.descriptionText = page.locator(".inventory_item_desc")
        this.taxText = page.locator(".summary_tax_label")
        this.finishButton = page.getByRole("button", {name: "Finish"})
    }

    async isPaymentCard(paymentCard: string) {
        return await this.page.getByText(paymentCard).isVisible()
    }

    async isShippingCompany(shippingCompany: string) {
        return this.page.getByText(shippingCompany).isVisible()
    }

    async isTotal(total: string) {
        return this.page.getByText(total).isVisible()
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

    async getTax() {
        var taxText = await this.taxText.innerText()
        return taxText.substring(taxText.lastIndexOf("$") + 1)
    }

    async clickOnFinish() {
        await this.finishButton.click()
    }
}