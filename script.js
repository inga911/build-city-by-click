//Auto loader elements
const woodAuto = document.getElementById('autoLoadWood')
woodAuto.style.display = 'none'
const stoneAuto = document.getElementById('autoLoadStone')
stoneAuto.style.display = 'none'
const goldAuto = document.getElementById('autoLoadGold')
goldAuto.style.display = 'none'

// Counter elements
const woodClicks = document.getElementById('woodClicks');
const stoneClicks = document.getElementById('stoneClicks');
const goldClicks = document.getElementById('goldClicks');
const population = document.getElementById('population');

// Image elements
const woodImg = document.getElementById('wood');
const stoneImg = document.getElementById('stone');
const goldImg = document.getElementById('gold');
// const simpleHouseImg = document.getElementById('simpleHouseImg');
const biggerHouseImg = document.getElementById('biggerHouseImg');
const marketImg = document.getElementById('marketImg');
const stoneWallImg = document.getElementById('stoneWallImg');
const cityHallImg = document.getElementById('cityHallImg');

// Shop cards
const simpleHouse = document.getElementById('simpleHouse');
const biggerHouse = document.getElementById('biggerHouse');
const market = document.getElementById('market');
const stoneWall = document.getElementById('stoneWall');
const cityHall = document.getElementById('cityHall');
const autoWoods = document.getElementById('autoWood')
const autoStones = document.getElementById('autoStone')

const userCity = document.getElementById('userCity')

// Initial counts
let countWood = 6000;
let countStone = 6000;
let countGold = 6000;
let countPopulation = 6000

// Click event listeners for resources
woodImg.onclick = () => {
    countWood++;
    woodClicks.textContent = countWood;
};

stoneImg.onclick = () => {
    countStone++;
    stoneClicks.textContent = countStone;
};

goldImg.onclick = () => {
    countGold++;
    goldClicks.textContent = countGold;
};

function costs(wood, stone, gold, population) {
    const woodCost = wood;
    const stoneCost = stone;
    const goldCost = gold;
    const populationCost = population;
    return { woodCost, stoneCost, goldCost, populationCost };
}


let errorAppended = false;
simpleHouse.onclick = () => {
    const { woodCost, stoneCost, goldCost } = costs(10, 10, 30);
    if (countWood >= woodCost && countStone >= stoneCost && countGold >= goldCost) {

        countWood -= woodCost;
        countStone -= stoneCost;
        countGold -= goldCost;
        countPopulation += 10

        population.innerText = countPopulation
        woodClicks.textContent = countWood;
        stoneClicks.textContent = countStone;
        goldClicks.textContent = countGold;
        const cloneSimpleHouseImg = simpleHouseImg.cloneNode(true);
        cloneSimpleHouseImg.style.height = '50px'
        userCity.appendChild(cloneSimpleHouseImg)
        errorAppended = false;
    } else {
        if (!errorAppended) {
            const errorTxt = document.createElement('span')
            errorTxt.textContent = 'Need more resources';
            errorTxt.style.color = 'crimson'
            errorTxt.style.fontWeight = '600'
            errorTxt.style.marginTop = '20px'
            errorTxt.style.fontSize = '15px'
            simpleHouse.appendChild(errorTxt);
            // simpleHouse.classList.add('disable')
            errorAppended = true;
        }
    }
};


biggerHouse.onclick = () => {
    const { woodCost, stoneCost, goldCost } = costs(30, 30, 50);
    if (countWood >= woodCost && countStone >= stoneCost && countGold >= goldCost) {

        countWood -= woodCost;
        countStone -= stoneCost;
        countGold -= goldCost;
        countPopulation += 20

        population.innerText = countPopulation
        woodClicks.textContent = countWood;
        stoneClicks.textContent = countStone;
        goldClicks.textContent = countGold;
        const clonebiggerHouseImg = biggerHouseImg.cloneNode(true);
        clonebiggerHouseImg.style.height = '50px'
        userCity.appendChild(clonebiggerHouseImg)
        errorAppended = false;
    } else {
        if (!errorAppended) {
            const errorTxt = document.createElement('span')
            errorTxt.textContent = 'Need more resources';
            errorTxt.style.color = 'crimson'
            errorTxt.style.fontWeight = '600'
            errorTxt.style.marginTop = '20px'
            errorTxt.style.fontSize = '15px'
            biggerHouse.appendChild(errorTxt);
            // simpleHouse.classList.add('disable')
            errorAppended = true;
        }
    }
};

market.onclick = () => {
    const { woodCost, stoneCost, goldCost, populationCost } = costs(20, 100, 200, 100);
    if (countWood >= woodCost && countStone >= stoneCost && countGold >= goldCost && countPopulation >= populationCost) {

        countWood -= woodCost;
        countStone -= stoneCost;
        countGold -= goldCost;
        countPopulation -= populationCost

        woodClicks.textContent = countWood;
        stoneClicks.textContent = countStone;
        goldClicks.textContent = countGold;
        population.textContent = countPopulation;
        const clonemarketImg = marketImg.cloneNode(true);
        clonemarketImg.style.height = '50px'
        setInterval(() => {
            countGold++
            goldClicks.textContent = countGold
            goldAuto.style.display = 'block'
        }, 1000)
        errorAppended = false;
    } else {
        if (!errorAppended) {
            const errorTxt = document.createElement('span')
            errorTxt.textContent = 'Need more resources';
            errorTxt.style.color = 'crimson'
            errorTxt.style.fontWeight = '600'
            errorTxt.style.marginTop = '20px'
            errorTxt.style.fontSize = '15px'
            market.appendChild(errorTxt);
            // simpleHouse.classList.add('disable')
            errorAppended = true;
        }
    }
};


stoneWall.onclick = () => {
    const { woodCost, stoneCost, goldCost, populationCost } = costs(20, 200, 200, 50);
    if (countWood >= woodCost && countStone >= stoneCost && countGold >= goldCost && countPopulation >= populationCost) {

        countWood -= woodCost;
        countStone -= stoneCost;
        countGold -= goldCost;
        countPopulation -= populationCost

        woodClicks.textContent = countWood;
        stoneClicks.textContent = countStone;
        goldClicks.textContent = countGold;
        population.textContent = countPopulation;
        const clonestoneWallImg = stoneWallImg.cloneNode(true);
        clonestoneWallImg.style.height = '50px'
        userCity.appendChild(clonestoneWallImg)
        errorAppended = false;
    } else {
        if (!errorAppended) {
            const errorTxt = document.createElement('span')
            errorTxt.textContent = 'Need more resources';
            errorTxt.style.color = 'crimson'
            errorTxt.style.fontWeight = '600'
            errorTxt.style.marginTop = '20px'
            errorTxt.style.fontSize = '15px'
            stoneWall.appendChild(errorTxt);
            // simpleHouse.classList.add('disable')
            errorAppended = true;
        }
    }
};


cityHall.onclick = () => {
    const { woodCost, stoneCost, goldCost, populationCost } = costs(200, 200, 500, 300);
    if (countWood >= woodCost && countStone >= stoneCost && countGold >= goldCost && countPopulation >= populationCost) {

        countWood -= woodCost;
        countStone -= stoneCost;
        countGold -= goldCost;
        countPopulation -= populationCost

        woodClicks.textContent = countWood;
        stoneClicks.textContent = countStone;
        goldClicks.textContent = countGold;
        population.textContent = countPopulation;
        const clonecityHallImg = cityHallImg.cloneNode(true);
        clonecityHallImg.style.height = '50px'
        userCity.appendChild(clonecityHallImg)
        errorAppended = false;
    } else {
        if (!errorAppended) {
            const errorTxt = document.createElement('span')
            errorTxt.textContent = 'Need more resources';
            errorTxt.style.color = 'crimson'
            errorTxt.style.fontWeight = '600'
            errorTxt.style.marginTop = '20px'
            errorTxt.style.fontSize = '15px'
            cityHall.appendChild(errorTxt);
            // simpleHouse.classList.add('disable')
            errorAppended = true;
        }
    }
};

autoWoods.onclick = () => {
    const { woodCost, stoneCost, goldCost, populationCost } = costs(200, 200, 1000, 50);
    if (countWood >= woodCost && countStone >= stoneCost && countGold >= goldCost && countPopulation >= populationCost) {

        countWood -= woodCost;
        countStone -= stoneCost;
        countGold -= goldCost;
        countPopulation -= populationCost

        woodClicks.textContent = countWood;
        stoneClicks.textContent = countStone;
        goldClicks.textContent = countGold;
        population.textContent = countPopulation;
        setInterval(() => {
            countWood++
            woodClicks.textContent = countWood
            woodAuto.style.display = 'block'
        }, 1000)
        errorAppended = false;
    } else {
        if (!errorAppended) {
            const errorTxt = document.createElement('span')
            errorTxt.textContent = 'Need more resources';
            errorTxt.style.color = 'crimson'
            errorTxt.style.fontWeight = '600'
            errorTxt.style.marginTop = '20px'
            errorTxt.style.fontSize = '15px'
            autoWoods.appendChild(errorTxt);
            // simpleHouse.classList.add('disable')
            errorAppended = true;
        }
    }
};

autoStones.onclick = () => {
    const { woodCost, stoneCost, goldCost, populationCost } = costs(200, 200, 1000, 50);
    if (countWood >= woodCost && countStone >= stoneCost && countGold >= goldCost && countPopulation >= populationCost) {

        countWood -= woodCost;
        countStone -= stoneCost;
        countGold -= goldCost;
        countPopulation -= populationCost

        woodClicks.textContent = countWood;
        stoneClicks.textContent = countStone;
        goldClicks.textContent = countGold;
        population.textContent = countPopulation;
        setInterval(() => {
            countStone++
            stoneClicks.textContent = countStone
            stoneAuto.style.display = 'block'
        }, 1000)
        errorAppended = false;
    } else {
        if (!errorAppended) {
            const errorTxt = document.createElement('span')
            errorTxt.textContent = 'Need more resources';
            errorTxt.style.color = 'crimson'
            errorTxt.style.fontWeight = '600'
            errorTxt.style.marginTop = '20px'
            errorTxt.style.fontSize = '15px'
            autoStones.appendChild(errorTxt);
            // simpleHouse.classList.add('disable')
            errorAppended = true;
        }
    }
};