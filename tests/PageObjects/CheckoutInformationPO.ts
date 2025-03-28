import { Locator, Page } from "@playwright/test"

export class CheckoutInformationPO {

    private readonly firstNameTextbox : Locator
    private readonly lastNameTextbox : Locator
    private readonly zipCodeTextbox : Locator
    private readonly continueButton : Locator

    constructor(page: Page) {
        this.firstNameTextbox = page.getByRole("textbox", {name: "First Name"})
        this.lastNameTextbox = page.getByRole("textbox", {name: "Last Name"})
        this.zipCodeTextbox = page.getByRole("textbox", {name: "Zip/Postal Code"})
        this.continueButton = page.getByRole("button", {name: "Continue"})
    }

    async checkoutInformation(firstName: string, lastName: string, zipCode: string) {
        await this.firstNameTextbox.fill(firstName)
        await this.lastNameTextbox.fill(lastName)
        await this.zipCodeTextbox.fill(zipCode)
        await this.continueButton.click()
    }
}