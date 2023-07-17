function MenuItem(name, category) {
    this.name = name
    this.category = category
}

function Menu(menuDataInput) {

    this.menuDataInput = menuDataInput;
    this.items = [];
    this.form = document.querySelector("#menu");

    this.generateMenuItemsFromMenuDataInput = function () {

        for (let i = 0; i < this.menuDataInput.length; i++) {
            let dataItem = this.menuDataInput[i];
            this.items.push(new MenuItem(dataItem.name, dataItem.category));
        }

    }
}


Menu.prototype.render = function () {
    let form = this.form;

    for (let i = 0; i < this.items.length; i++) {

        let item = this.items[i];

        // if in an object. the value we put through should be a properties of a constructor function.

        let div = document.createElement('div')
        div.classList.add("form-item")
        form.appendChild(div)

        let id = item.name + Math.random().toString();

        // generate html checkbox
        let renderPrepList = `
                    <input type="checkbox" name="${id}" id="${id}">
                    <label for="${id}">${item.name}</label>
                    <br>
                `
        div.innerHTML = renderPrepList;

    }
}

Menu.prototype.addEvent = function () {
    let form = this.form;

    form.addEventListener('click', function (event) {
        console.dir(event.target);
        // if type of event.target element is checkbox, we will find closest div tag has class form-item
        if (event.target.tagName === "INPUT" && event.target.type === 'checkbox') {
            let div = event.target.closest('div.form-item');
            if (div) {
                console.log(div);
                if (event.target.checked) {
                    div.classList.add('form-item--is-checked')
                } else {
                    div.classList.remove('form-item--is-checked')
                }
            }
        }

    })
}

Menu.prototype.init = function () {
    this.generateMenuItemsFromMenuDataInput();
    this.render();
    this.addEvent();
}

let menuData = [
    { "name": "1 1/2 cups Milk", "category": "milk" },
    { "name": "1/2 cup mascarpone", "category": "mascarpone" },
    { "name": "1/2 tsp pink Salt", "category": "salt" },
    { "name": "1 lb Black Mission Figs", "category": "figs" },
    { "name": "1/2 cup Brown Sugar", "category": "sugar" },
    { "name": " 2-4 tbsp water", "category": "water" },
    { "name": " 1 1/2 cups heavy cream", "category": "cream" },
    { "name": "1/3 granulated sugar", "category": "gransugar" },
    { "name": " egg York", "category": "egg" },
    { "name": "1 lemon, Juiced", "category": "juiced" },
    { "name": "2 tbsp butter", "category": "butter" },
    { "name": "1 cup honey roasted pecans,  roughly chopped", "category": "honey" },
];

let menu = new Menu(menuData);
menu.init();