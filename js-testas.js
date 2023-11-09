/*
1. Sukurkite funkciją, kuri paverstų eurus į dolerius.
Sugeneruokite atsitiktinį skaičių (eurų sumą) nuo 1 iki 1000.
Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
doleriais.
*/
function ConvertEurToDollar(eur) {
    let rateOfExchange = 1.06;
    return (eur * rateOfExchange).toFixed(2);
};

let randomEur = Math.floor(Math.random() * 1000) + 1;
console.log(`random EUR: ${randomEur} EUR.`);
console.log("Converted to dollar: " + ConvertEurToDollar(randomEur) + " $");

/*
2. Sukurkite funkciją, kuri paverstų dolerius į eurus.
Sugeneruokite atsitiktinį skaičių (dolerių sumą) nuo 1 iki 1000.
Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
eurais.
*/
function ConvertDollarToEur(dollar) {
    let rateOfExchange = 0.94;
    return (dollar * rateOfExchange).toFixed(2);
};

let randomDollar = Math.floor(Math.random() * 1000) + 1;
console.log(`random dollar: ${randomDollar} $`);
console.log("Converted to Eur: " + ConvertDollarToEur(randomDollar) + " EUR");

/*
3. Parašykite programą, kuri suskaičiuotų žmogaus BMI (body
mass index), kai yra žinomas žmogaus ūgis ir svoris. 
BMI formulė: žmogaus svoris (kg) padalintas iš ūgio metrais kvadratu. 
Pvz. svoris = 80kg, ūgis = 1.8 m. 
BMI = 80 / 1.8**2 = 24.69
Viršsvoris = BMI > 25
Normalu = 18.5 <= BMI < 25
Per mažas svoris = BMI < 18.5
*/
let height = 1.75;
let weight = 75;
let bmi = weight / height ** 2;
console.log(`BMI: ${bmi.toFixed(2)}`);

if (bmi > 25) {
    console.log("Virssvoris");
} else if (bmi < 25 && bmi >= 18.5) {
    console.log("Normalus");
} else if (bmi < 18.5) {
    console.log("Per mazas svoris");
};

/*
4. Parašykite programą, kuri iš duoto žmogaus amžiaus metais
pasakytų kiek tai yra sekundėmis, minutėmis, valandomis,
dienomis.
*/
let age = 30;
let ageInDays = age * 365;
let ageInHours = ageInDays * 24;
let ageInMinutes = ageInHours * 60;
let ageInSeconds = ageInMinutes * 60;
console.log(`Dienomis: ${ageInDays}`);
console.log(`Valandomis: ${ageInHours}`);
console.log(`Minutemis: ${ageInMinutes}`);
console.log(`Sekundemis: ${ageInSeconds}`);

/*
5. Parašykite programą, kuri konvertuos termometro
duomenis iš Farenheito į Celsijų, ir atvirkščiai.
*/
function CalculateTemperatureToFahrenheit(celsius) {
    const fahrenheit = (celsius * 9/5) + 32;
    console.log(`Celsius to Fahrenheit: ${fahrenheit}`);
};

function CalculateTemperatureToCelsius(fahrenheit) {
    const celsius = (fahrenheit - 32) * 5/9;
    console.log(`Fahrenheit to Celsius: ${celsius}`);
};

CalculateTemperatureToFahrenheit(10);
CalculateTemperatureToCelsius(50);

/*
6. Sukurkite kodą, kuris išspausdins į konsolę
1-2-3-4-5-6-7-8-9-10 vienoje eilutėje. Prieš vienetą ir po
dešimties neturėtų būti brūkšniuko.
*/
let numbers = "";
for (let index = 1; index <= 10; index++) {
    if (index != 10) {
        numbers += index + "-";
    } else if (index == 10) {
        numbers += index + "";
    };
};
console.log(numbers);

/*
7. Panaudokite for ciklus, kad sukurtumėte tokį vaizdą konsolėje.
*
**
***
****
*****
*/
let rows = [];
for (let i = 1; i < 6; i++) {
    let row = "";
    for (let j = 0; j < i; j++) {
        row += "*";
    };
    rows.push(row);
};

console.log(rows.join('\n'));

/*
8. Parašykite kodą, kuris apskaičiuos kiek liko dienų iki Kalėdų.
*/
let dateNow = (new Date()).getFullYear();
let christmasDate = new Date(dateNow, 11, 25); // 11 menuo reiskia gruodi, nes skaiciuojasi nuo 0;

let now = new Date();
let leftMiliSeconds = christmasDate.getTime() - now.getTime();
let leftDaysTillChristmas = Math.ceil(leftMiliSeconds / (1000 * 60 * 60 * 24));

console.log(`Iki Kaledu liko ${leftDaysTillChristmas} dienos.`);

/*
9. Parašykite kodą, kuris apjungia masyvo duomenis į vieną
tekstinę eilutę. Turėtumėte gauti tokį rezultatą:
Tomas,Dainius,Paulius,Jonas
Tomas+Dainius+Paulius+Jonas
*/
const names = ["Tomas", "Dainius", "Paulius", "Jonas"];
console.log(names.join(","));
console.log(names.join("+"));

/*
10. Parašykite kodą, kuris sugeneruos dvylikos simbolių
slaptažodį. Slaptažodyje privalo būti bent po vieną: didžioji raidė,
mažoji raidė, skaičius, specialusis simbolis. Visi slaptažodžio
simboliai privalo būti atsitiktiniai ir atsitiktine tvarka.
*/
const number = "0123456789";
const capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const smallLetters = "abcdefghijklmnopqrstuvwxyz";
const symbols = ",<.>/?:;'[]{}`~!@#$%^&*()_-+=";

const characterArrays = [number, capitalLetters, smallLetters, symbols];

//atsitiktine tvarka ismeto array elementus, kad kaskart skirtingose vietose jie butu, jog nesikartotu generavimo algoritmas;
for (let i = characterArrays.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [characterArrays[i], characterArrays[j]] = [characterArrays[j], characterArrays[i]];
};

let password = "";

//uztikrina, jog butu itraukti number, capitalLetters, smallLetters, symbols;
characterArrays.forEach(characterArray => {
  let randomCharacter = characterArray.charAt(Math.floor(Math.random() * characterArray.length));
  password += randomCharacter;
});

//uztikrina, kad password ilgis butu iki 12 simboliu;
while (password.length < 12) {
  let randomIndex = Math.floor(Math.random() * characterArrays.length);
  let randomCharacterArray = characterArrays[randomIndex];
  let randomCharacter = randomCharacterArray.charAt(Math.floor(Math.random() * randomCharacterArray.length));
  password += randomCharacter;
};

console.log("password:", password);

let hasNumber = false;
let hasCapitalLetter = false;
let hasSmallLetter = false;
let hasSymbol = false;

//tikrina, ar password simboliai turi visus reikalingus kintamuosius;
for (const character of password) {
  if (number.includes(character)) {
    hasNumber = true;
  } else if (capitalLetters.includes(character)) {
    hasCapitalLetter = true;
  } else if (smallLetters.includes(character)) {
    hasSmallLetter = true;
  } else if (symbols.includes(character)) {
    hasSymbol = true;
  };
};

//patikrinimo salyga, ar turi visus kintamuosius;
if (hasNumber && hasCapitalLetter && hasSmallLetter && hasSymbol) {
  console.log("The password meets the requirements.");
} else {
  console.log("The password does not meet the requirements.");
};
