const beerPrice = 15.678;
const squidPrise = 123.965;
const pringlesPrise = 90.2345;

//Використовуючи вбудований об'єкт Math – виведіть максимальне число
document.write(`Максимальна ціна: ${Math.max(beerPrice, squidPrise, pringlesPrise)} <br><hr>`);

//Використовуючи вбудований об'єкт Math – виведіть мінімальне число
document.write(`Мінімальна ціна: ${Math.min(beerPrice, squidPrise, pringlesPrise)} <br><hr>`);

//Складіть вартість всіх товарів, помістіть її в змінну та виведіть цю суму
const sumItems = beerPrice + squidPrise + pringlesPrise
document.write(`Загальна сума: ${sumItems} <br><hr>`);

//Відкиньте копійки у всіх товарів, потім – складіть цілу частину вартості кожного товару між собою. Округлення використовувати в МЕНЬШУ сторону.
const roundedBeerPrice = Math.trunc(beerPrice);
const roundedSquidPrice = Math.trunc(squidPrise);
const roundedPringlesPrice = Math.trunc(pringlesPrise);
const roundedSum = roundedBeerPrice + roundedSquidPrice + roundedPringlesPrice;
document.write(`Округлена сума в меншу сторону: ${roundedSum}<br><hr>`);

//Виведіть суму товарів округлену до сотень. (Наприклад якщо вийшло 260, то виведіть 300)
document.write(`Округлена сума до сотень: ${Math.round(sumItems / 100) * 100}<br><hr>`);

//Виведіть булеве значення: чи є сума всіх товарів (округлена в меншу сторону) парним чи непарним числом?
let isRoundedSumEven = true;
if (roundedSum % 2 !== 0) {
    isRoundedSumEven = false;
}
document.write(`Чи парна сума всіх товарів (округлена в меншу сторону)?: ${isRoundedSumEven} <br><hr>`);

//Виведіть суму решти, при оплаті всіх товарів (без округлення), якщо клієнт платить 500 грн.
const beerPriceRemainder = 500 - beerPrice;
const squidPriseRemainder = 500 - squidPrise;
const pringlesPriseRemainder = 500 - pringlesPrise;
document.write(`Сума решти  із 500: ${beerPriceRemainder + squidPriseRemainder + pringlesPriseRemainder} "<br><hr>`);

//Виведіть середнє значення цін, округлене до другого знаку після коми
document.write(`Середнє значення цін: ${(sumItems / 3).toFixed(2)}<br><hr>`);

/* Створіть змінну, в якої збережіть випадкову знижку (використовуйте функцію Math.random).
Зробіть клієнту випадкову знижку та виведіть суму до оплати округлену до 2 знаків після коми.
Виведіть чистий прибуток, якщо клієнт заплатив зі знижкою та собівартість товарів рівно в два рази нижче їх ціни?*/
const sale = Math.trunc(Math.random() * 100);
const clientSum = (Math.random() * 100).toFixed(2);
const difference = (clientSum * (sale / 100)).toFixed(2);
const cost = (clientSum / 2).toFixed(2);
document.write(`Ціна була ${clientSum}, знижка склала ${sale}%, клієнт заплатив на ${difference} менше, собівартість =${cost}. Чистий прибуток = ${(cost - difference).toFixed(2)} <br><hr> `)