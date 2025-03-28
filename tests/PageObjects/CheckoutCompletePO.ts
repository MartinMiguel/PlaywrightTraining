import { Locator, Page } from "@playwright/test"

export class CheckoutCompletePO {

    private readonly orderCompletedText : Locator
    private readonly backHomeButton : Locator

    constructor(page: Page) {
        this.orderCompletedText = page.getByRole("heading", {name: "Thank you for your order!"})
        this.backHomeButton = page.getByRole("button", {name: "Back Home"})
    }

    async isThankYouOrderMessage() {
        return await this.orderCompletedText.isVisible()
    }

    async clickOnBackHome() {
        await this.backHomeButton.click()
    }
}