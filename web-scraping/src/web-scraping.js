import jsdom from "jsdom";
import fetch from "isomorphic-fetch"
import puppeteer from "puppeteer"


const wikipedia_url = "https://fr.wikipedia.org/wiki/Liste_des_lacs_de_Suisse";


/*
========================================================================================================================
Capture d’écran
========================================================================================================================
*/

(async() => {
    const browser = await puppeteer.launch({
        defaultViewport: { width: 1920, height: 1720 }
    });
    const page = await browser.newPage();
    await page.goto('https://fr.wikipedia.org/wiki/Liste_des_lacs_de_Suisse');
    await page.screenshot({ path: 'screen.png' });
    await browser.close();
})();

/*
========================================================================================================================
Noms des lacs Suisses
========================================================================================================================
*/

/* const lacNames = async () => {
    const response = await fetch('https://fr.wikipedia.org/wiki/Liste_des_lacs_de_Suisse');
    const text = await response.text();
    const dom = await new jsdom.JSDOM(text);

    const body = dom.window.document;
    const names = body.querySelectorAll("table>tbody>tr>td>span");
    
    

    const namesL = [...names].map((d) => {
        let newArray = [{
            "name" : d.textContent
        }]
        return newArray
    } );

    console.log(namesL)
}
lacNames(); */


/*
========================================================================================================================
Nom du lac le plus profond
========================================================================================================================
*/

/* const lacNames = async () => {
    const response = await fetch('https://fr.wikipedia.org/wiki/Liste_des_lacs_de_Suisse');
    const text = await response.text();
    const dom = await new jsdom.JSDOM(text);

    const body = dom.window.document;
    const names = body.querySelectorAll("table>tbody>tr>td>span");
    const prof = body.querySelectorAll("table>tbody>tr>td:nth-of-type(3)");
    

    const namesL = [...names].map((d, i) => {
        let newArray = [{
            "nom" : d.textContent,
           "prof" : prof[i].textContent,
        }]
        return newArray
    } );
    const bigger = 0;
for (const lac of namesL) {
    
    if (lac.prof>bigger) {
        bigger = lac.name;
    }
    
}
console.log(bigger)
    
} */







/*
========================================================================================================================
Nom du lac le plus grand
========================================================================================================================
*/

/* const lacNames = async () => {
    const response = await fetch('https://fr.wikipedia.org/wiki/Liste_des_lacs_de_Suisse');
    const text = await response.text();
    const dom = await new jsdom.JSDOM(text);

    const body = dom.window.document;
    const names = body.querySelectorAll("table>tbody>tr>td>span");
    const grand = body.querySelectorAll("table>tbody>tr>td:nth-of-type(3)");
    

    const namesL = [...names].map((d, i) => {
        let newArray = [{
            "nom" : d.textContent,
           "grand" : grand[i].textContent,
        }]
        return newArray
    } );
    const bigger = 0;
for (const lac of namesL) {
    
    if (lac.grand>bigger) {
        bigger = lac.name;
    }
    
}
console.log(bigger)
    
} */
