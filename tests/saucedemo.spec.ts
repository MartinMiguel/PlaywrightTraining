import { test } from '@playwright/test';
import { LoginBO } from './BusinessObjects/LoginBO';
import { CheckoutCompleteBO } from './BusinessObjects/CheckoutCompleteBO';
import { ProductsBO } from './BusinessObjects/ProductsBO';
import { CheckoutBO } from './BusinessObjects/CheckoutBO';
import { CheckoutInformationBO } from './BusinessObjects/CheckoutInformationBO';
import { CheckoutOverviewBO } from './BusinessObjects/CheckoutOverviewBO';

test('Purchase an Item', async ({ page }, testInfo) => { 
    const url = process.env.URL
    const user = process.env.USER
    const password = process.env.PASSWORD
    const loginBO = new LoginBO(page, testInfo)
    const productsBO = new ProductsBO(page)
    const checkoutBO = new CheckoutBO(page)
    const checkoutInformationBO = new CheckoutInformationBO(page)
    const checkoutOverviewBO = new CheckoutOverviewBO(page, testInfo)
    const checkoutCompleteBO = new CheckoutCompleteBO(page, testInfo)

    await page.goto(url)
    await loginBO.loginWithCredentials(user, password)
    await productsBO.addOneRandomItemToTheCart()
    await productsBO.clickOnCart()
    await checkoutBO.verifyCheckoutItemInfo(productsBO.name, productsBO.price, productsBO.description)
    await checkoutBO.clickOnCheckout()
    await checkoutInformationBO.checkoutBuyerInfo("Martin", "Lopez", "11000")
    await checkoutOverviewBO.verifyCheckoutOverviewItemInfo(productsBO.name, productsBO.price, productsBO.description)
    await checkoutOverviewBO.verifyPaymentCard("SauceCard #31337")
    await checkoutOverviewBO.verifyShippingCompany("Free Pony Express Delivery!")
    await checkoutOverviewBO.verifyItemTotal(productsBO.price)
    await checkoutOverviewBO.clickOnFinish()
    await checkoutCompleteBO.verifyOrderCompleted()
    await checkoutCompleteBO.clickOnBackHome()
  });