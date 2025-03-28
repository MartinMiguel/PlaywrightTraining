import { Page, TestInfo } from "@playwright/test"
import { LoginPO } from "../PageObjects/LoginPO"

export class LoginBO {

    private loginPO: LoginPO 
    private page: Page
    private testInfo: TestInfo
   
    constructor(page: Page, testInfo: TestInfo) {
        this.page = page
        this.testInfo = testInfo
        this.loginPO = new LoginPO(page)
    }

    async loginWithCredentials(username:string, password:string) {
        await this.loginPO.FillCredentials(username, password)
        await this.testInfo.attach('BeforeLogin', {
           body: await this.page.screenshot(),
           contentType: 'image/png' 
        })
        await this.loginPO.clickOnLogin()
        await this.testInfo.attach('AfterLogin', {
            body: await this.page.screenshot(),
            contentType: 'image/png' 
         })
    }
}