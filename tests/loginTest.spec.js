const { test } = require('@playwright/test');


const { LoginPage } = require('../pages/loginPage.js');

const  {Configuration} =require('../pages/configuration.js');

const {ProductsHomePage} =require('../pages/productsHomePage.js')

const loginPagetestData = require('../testData/loginPageTestData.json');
const productsPageTestData =require('../testData/productsPageTestData.json');


 let loginPage ;
 let configuration;
 let productsPage;


test.beforeEach('open the browser', async ({ page, baseURL }) => {
    configuration = new Configuration(page);
    loginPage = new LoginPage(page);
    productsPage = new ProductsHomePage(page);
   
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

    });

    test('login with invalid username and invalid password', async () => {
    
        await test.step('Login with invalid credentials', async () => {
            await loginPage.login(loginPagetestData.invalidUserName, loginPagetestData.invalidpassword);
        });

        await test.step('Then I should see error message', async () => {
            await loginPage.expectloginTofail();
        });
    });






});