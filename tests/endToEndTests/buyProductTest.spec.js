const { test } = require('@playwright/test');


const { LoginPage } = require('../../pages/loginPage.js');

const  {Configuration} =require('../../pages/configuration.js');

const {ProductsHomePage} =require('../../pages/productsHomePage.js')

const {CartPage }=require('../../pages/cartPage.js')
const {InformationPage }=require('../../pages/informationPage.js')

const {OverviewPage }=require('../../pages/overviewPage.js')


const loginPagetestData = require('../../testData/loginPageTestData.json');
const productsPageTestData =require('../../testData/productsPageTestData.json');
const cartPageTestData=require('../../testData/cartPageTestData.json');
const informationPagetestData=require('../../testData/informationPageTestData.json')

const overviewTestData=require('../../testData/overviewPageTestData.json');


 let loginPage ;
 let configuration;
 let productsPage;
 let cartPage;
 let informationPage;
 let overviewPage;



test.beforeEach('open the browser', async ({ page, baseURL }) => {
    configuration = new Configuration(page);
    loginPage = new LoginPage(page);
    productsPage = new ProductsHomePage(page);
    cartPage=new CartPage(page);
    informationPage=new InformationPage(page);
    overviewPage= new OverviewPage(page);
   
    await test.step('When I navigate to Swag Labs login page', async () => {
        await configuration.navigateToBaseURL(baseURL);
    })

});

    test.afterEach('close the browser',async()=>{
        await configuration.closeBrowser();
    });


test.describe('Validate login functionality', () => {
   

    test('login with valid username and valid password', async ({}) => {
        
        await test.step('And login with valid "username" and valid "password" and click on login Button', async () => {
            await loginPage.login(loginPagetestData.username, loginPagetestData.password);           
        });

        await test.step('Then I should navigate to products page successfully and see products title & all products', async () => {
            await productsPage.expectedUserToNavigateToProductsPageSuccessfully(productsPageTestData.productsPageTitle);
        });


        await test.step('And click on Add to cart button for the first product', async () => {
            await productsPage.clickOnAddToCartButton();
        });

        await test.step('Then I should see "Remove Button" successfully', async () => {
            await productsPage.expectedButtonToHaveRemovetext(productsPageTestData.removeButtonText);
        });

        await test.step('And I should see number 1 added to shopping Cart Badge successfully', async () => {
            await productsPage.expectedShoppingCartBadgeToAddOneNum();
        });
        await test.step('When I click on shopping cart badge link', async () => {
            await productsPage.clickOnShoppingCartBadgeLink();
        });

        await test.step('Then I should navigate To cart page successfully', async () => {
            await cartPage.expcetedToNavigateToCartPageSuccessfully(cartPageTestData.cartPageTitle);
        });

        await test.step('When I click On checkout Button', async () => {
            await cartPage.clickOnCheckoutButton();
        });

        await test.step('And fill Checkout information', async () => {
            await informationPage.fillcheckoutInformation(informationPagetestData.firstName, informationPagetestData.lastName, informationPagetestData.postalCode);
        });
    
        await test.step('When I click on continue button', async () => {
            await informationPage.clickOnContinueButton();
        });

        await test.step('Then I should navigate To Checkout Overview page successfully', async () => {
            await overviewPage.expcetedToNavigateToOverviewPageSuccessfully(overviewTestData.overviewPageTitle);
        });
    
        await test.step('When I click on finish button', async () => {
            await overviewPage.clickOnFinishButton();
        });

    });

  






});