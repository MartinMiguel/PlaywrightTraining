import { expect, Page, TestInfo } from "@playwright/test"
import { CheckoutOverviewPO } from "../PageObjects/CheckoutOverviewPO"

export class CheckoutOverviewBO {

    name: string
    price: string
    description: string

    private page: Page
    private testInfo: TestInfo
    private checkoutOverviewPO: CheckoutOverviewPO
   
    constructor(page: Page, testInfo: TestInfo) {
        this.testInfo = testInfo
        this.page = page
        this.checkoutOverviewPO = new CheckoutOverviewPO(page)
    }

    async getName() {
        return await this.checkoutOverviewPO.getName()
    }

    async getPrice() {
        return await this.checkoutOverviewPO.getName()
    }

    async getDescription() {
        return await this.checkoutOverviewPO.getName()
    }

    async setName() {
        this.name = await this.checkoutOverviewPO.getName()
    }

    async setPrice() {
        this.price = await this.checkoutOverviewPO.getPrice()
    }

    async setDescription() {
        this.description = await this.checkoutOverviewPO.getDescription()
    }

    async setPaymentCard() {
        this.description = await this.checkoutOverviewPO.getDescription()
    }

    async clickOnFinish() {
        await this.checkoutOverviewPO.clickOnFinish()
    }

    async verifyCheckoutOverviewItemInfo(expectedName: string, expectedPrice: string, expectedDescription: string) {
        await this.testInfo.attach('CheckoutOverview', {
            body: await this.page.screenshot(),
            contentType: 'image/png' 
         })
        await this.setName() 
        await this.setPrice()
        await this.setDescription()
        console.log(
            "Checkout Overview Name: " + this.name + "\n" +
            "Checkout Overview Price: " + this.price + "\n" +
            "Checkout Overview Description: " + this.description + "\n")
        expect(expectedName).toEqual(this.name)
        expect(expectedPrice).toEqual(this.price)
        expect(expectedDescription).toEqual(this.description)
    }

    async verifyPaymentCard(paymentCard: string) {
        expect(await this.checkoutOverviewPO.isPaymentCard(paymentCard)).toBe(true)
    }

    async verifyShippingCompany(shippingCompany: string) {
        expect(await this.checkoutOverviewPO.isShippingCompany(shippingCompany)).toBe(true) 
    }

    async verifyItemTotal(itemPrice: string) {
        var tax = await this.checkoutOverviewPO.getTax()
        var total = (parseFloat(itemPrice.replace('$','')) + parseFloat(tax)).toFixed(2)
        expect(await this.checkoutOverviewPO.isTotal('Total: $' + total.toString())).toBe(true) 
    }
}