import { Page } from "@playwright/test"
import { CheckoutInformationPO } from "../PageObjects/CheckoutInformationPO"

export class CheckoutInformationBO {

    private page: Page
    private checkoutInformationPO: CheckoutInformationPO 
   
    constructor(page: Page) {
        this.page = page
        this.checkoutInformationPO = new CheckoutInformationPO(page)
    }
    
    async checkoutBuyerInfo(firstName:string, lastName:string, zipCode:string) {
        await this.checkoutInformationPO.checkoutInformation(firstName, lastName, zipCode)
        await this.page.screenshot({path: 'screenshots/BuyerInfo.png', fullPage: true})
    }
}