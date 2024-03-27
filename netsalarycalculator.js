function calculateNetSalary() {
    //constants for tax rates and deductions
    const taxRateS = [
        {min: 0, max: 24000, rate: 0.1},
        {min: 24001, max: 32333, rate: 0.15},
        {min: 32334, max: 40417, rate: 0.3},
        {min: 40418, max: Infinity, rate: 0.3},
    ];
    const nhifRates = [
        {min: 0, max: 5999, rate: 150},
        {min: 6000, max: 7999, rate: 300},
        {min: 8000, max: 11999, rate: 400},
        {min: 12000, max: 14999, rate: 500},
        {min: 15000, max: 19999, rate: 600},
        {min: 20000, max: 24999, rate: 750},
        {min: 25000, max: 29999, rate: 850},
        {min: 30000, max: 34999, rate: 900},
        {min: 35000, max: 39999, rate: 950},
        {min: 40000, max: 44999, rate: 1000},
        {min: 45000, max: 49999, rate: 1100},
        {min: 50000, max: 59999, rate: 1200},
        {min: 60000, max: 69999, rate: 1300},
        {min: 70000, max: 79999, rate: 1400},
        {min: 80000, max: 89999, rate: 1500},
        {min: 90000, max: 99999, rate: 1600},
        {min: 100000, max: 109999, rate: 1700},
        {min: 110000, max: 119999, rate: 1800},
        {min: 120000, max: 129999, rate: 1900},
        {min: 130000, max: 139999, rate: 2000},
        {min: 140000, max: 149999, rate: 2100},
        {min: 150000, max: 159999, rate: 2200},
        {min: 160000, max: 169999, rate: 2300},
        {min: 170000, max: 179999, rate: 2400},
        {min: 180000, max: 189999, rate: 2500},
        {min: 190000, max: 199999, rate: 2600},
        {min: 200000, max: 209999, rate: 2700},
        {min: 210000, max: 219999, rate: 2800},
        {min: 220000, max: 229999, rate: 2900},
        {min: 230000, max: 239999, rate: 3000},
        {min: 240000, max: 249999, rate: 3100},
        {min: 250000, max: 259999, rate: 3200},
        {min: 260000, max: 269999, rate: 3300},
        {min: 270000, max: 279999, rate: 3400},
        {min: 280000, max: 289999, rate: 3500},
        {min: 290000, max: 299999, rate: 3600},
        {min: 300000, max: 309999, rate: 3700},
        {min: 310000, max: 319999, rate: 3800},
        {min: 320000, max: 329999, rate: 3900},
        {min: 330000, max: 339999, rate: 4000},
        {min: 340000, max: 349999, rate: 4100},
        {min: 350000, max: 359999, rate: 4200},
        {min: 360000, max: 369999, rate: 4300},
        {min: 370000, max: 379999, rate: 4400},
        {min: 380000, max: 389999, rate: 4500},
        {min: 390000, max: 399999, rate: 4600},
        {min: 400000, max: 409999, rate: 4700},
        {min: 410000, max: 419999, rate: 4800},
        {min: 420000, max: 429999, rate: 4900},
        {min: 430000, max: 439999, rate: 5000},
        {min: 440000, max: 449999, rate: 5100},
        {min: 450000, max: 459999, rate: 5200},
        {min: 460000, max: 469999, rate: 5300},
        {min: 470000, max: 479999, rate: 5400},
        {min: 480000, max: 489999, rate: 5500},
        {min: 490000, max: 499999, rate: 5600},
        {min: 500000, max: Infinity, rate: 5700},
    ];
    const nssfRate = 0.06;

    //calculate tax
    let tax = 0;
    for (let i = 0; i < taxRateS.length; i++) {
        if (income >= taxRateS[i].min && income <= taxRateS[i].max) {
            tax = (income - taxRateS[i].min) * taxRateS[i].rate;
            break;
        }
    }
    //calculate nhif
    let nhif = 0;
    for (const rate of nhifRates) {
        if (income >= rate.min && income <= rate.max) {
            nhif = rate.rate;
            break;
        }
    }
    //calculate nssf
    let nssf = 0;
    if (income <= 6000) {
        nssf = income * nssfRate;
    }
    //calculate net salary
    let netSalary = income - tax - nhif - nssf;

    //display results
    console.log("Tax: " + tax.toFixed(2));
    console.log("NSSF: " + nssf.toFixed(2));
    console.log("NHIF: " + nhif.toFixed(2));
    console.log("Net Salary: " + netSalary.toFixed(2));
}