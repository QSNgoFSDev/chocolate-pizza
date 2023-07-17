let box = document.getElementById("check")
let form = document.createElement("form")

box.appendChild(form)

function PreList(content, name) {
    this.content = content
    this.name = name
}

let milk = new PreList("1 1/2 cups Milk", "milk")
let mascarpone = new PreList("1/2 cup mascarpone", "mascarpone")
let salt = new PreList("1/2 tsp pink Salt", "salt")
let figs = new PreList("1 lb Black Mission Figs", "figs")
let sugar = new PreList("1/2 cup Brown Sugar", "sugar")
let water = new PreList(" 2-4 tbsp water,", "water")
let cream = new PreList(" 1 1/2 cups heavy cream", "cream")
let granSugar = new PreList("1/3 granulated sugar", "gransugar")
let egg = new PreList(" egg York", "egg")
let juiced = new PreList("1 lemon, Juiced", "juiced")
let butter = new PreList("2 tbsp butter", "butter")
let honey = new PreList("1 cup honey roasted pecans,  roughly chopped", "honey")

let arrayList = [milk, mascarpone, salt, figs, sugar, water, cream, granSugar, egg, juiced, butter, honey]



function renderList(arr) {


    for (let i = 0; i < arr.length; i++) {

        // if in an object. the value we put through should be a properties of a constructor function.

        let div = document.createElement('div')
        div.classList.add("form-item")
        form.appendChild(div)

        let id = arr[i].name + Math.random().toString();

        // generate html checkbox
        let renderPrepList = `
                    <input type="checkbox" name="${id}" id="${id}">
                    <label for="${id}">${arr[i].content}</label>
                    <br>
                `
        div.innerHTML = renderPrepList;

        let checkBoxStatus = div.querySelector(`input[type="checkbox"]`);

        checkBoxStatus.addEventListener("change", function (event) {
            if (event.target.checked) {
                div.classList.add('form-item--is-checked')
            } else {
                div.classList.remove('form-item--is-checked')
            }
        });

    }
}

renderList(arrayList)
// console.log(checkBoxStatus)