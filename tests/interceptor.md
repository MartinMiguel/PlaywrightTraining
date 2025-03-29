
import { test } from '@playwright/test';
import { LoginBO } from './BusinessObjects/LoginBO';

test('Login without home images', async ({ page }, testInfo) => {
  const loginBO = new LoginBO(page, testInfo)

  //listen urls sent by the browser (requests) to server
  page.on("request", req => {
  console.log(req.url());
  })

  //block of resources to get loaded (images)
  await page.route(
    "**/*.{png,jpg,jpeg,svg}",
    (route) => route.abort());

  await page.goto(process.env.URL)
  await loginBO.loginWithCredentials(process.env.USER, process.env.PASSWORD)

  await page.screenshot({path:"screenshots/HomePageWithInterceptor.png", fullPage: true})

});

test("Intercept loading of books", async ({ page }) => {

  //modify response of one of the services
  await page.route(
    "https://demoqa.com/BookStore/v1/Books",
    (route) => {
      route.fulfill({
          status: 304,
          headers:{
              'Content-Type': 'application/json'
          },
          body: `
          {
              "books": [
                  {
                      "isbn": "9781449325862",
                      "title": "Test automation by Martin",
                      "subTitle": "A Working Introduction",
                      "author": "Richard E. Silverman",
                      "publish_date": "2020-06-04T08:48:39.000Z",
                      "publisher": "O'Reilly Media",
                      "pages": 500,
                      "description": "This pocket guide is the perfect on-the-job companion to Git, the distributed version control system. It provides a compact, readable introduction to Git for new users, as well as a reference to common commands and procedures for those of you with Git exp",
                      "website": "http://chimera.labs.oreilly.com/books/1230000000561/index.html"
                  }
              ]
          }
          `
      })
    }
  );

  
   await page.goto('https://demoqa.com/books') 

   //await page.pause()
   await page.screenshot({path:'books.png', fullPage:true}) 
});
