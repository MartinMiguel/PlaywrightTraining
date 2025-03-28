import { expect, Page, TestInfo } from "@playwright/test"
import { CheckoutCompletePO } from "../PageObjects/CheckoutCompletePO"

export class CheckoutCompleteBO {

    private page: Page
    private checkoutCompletePO: CheckoutCompletePO 
    private testInfo: TestInfo
   
    constructor(page: Page, testInfo: TestInfo) {
        this.testInfo = testInfo
        this.page = page
        this.checkoutCompletePO = new CheckoutCompletePO(page)
    }

    async clickOnBackHome() {
        await this.checkoutCompletePO.clickOnBackHome()
    }

    async verifyOrderCompleted() {
        await this.testInfo.attach('OrderCompleted', {
            body: await this.page.screenshot(),
            contentType: 'image/png' 
         })
        expect(await this.checkoutCompletePO.isThankYouOrderMessage()).toBe(true) 
    }
}