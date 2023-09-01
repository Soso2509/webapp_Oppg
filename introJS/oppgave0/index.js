// Oppgave 1
const elementToBeRemoved = document.getElementById('remove');
const removeButton = document.getElementById('remove-btn');

const removeElement = (id) => id.innerHTML ='';

removeButton.addEventListener('click', () =>{
    removeElement(elementToBeRemoved);
})

// Oppgave 2
const elementToBeChanged = document.getElementById('change');
const changeButton = document.getElementById('change-btn');
const newText = 'Vel...., hva er det å skrive, er ikke super oppfinnsom med slikt :)';

const changeElement = (id) => id.innerHTML = newText;

changeButton.addEventListener('click', () =>{
    changeElement(elementToBeChanged);
})

// Oppgave 3
const inputBox = document.getElementById('input');
const inputPrint = document.getElementById('input-text');

const updateText = (e) => inputPrint.textContent = e.target.value;

inputBox.addEventListener('input', (e) =>{
    updateText(e)
});

// Oppgave 4
const myList = ["item one", "item two", "item three"];

const list = document.getElementById('ul');
const listBtn = document.getElementById('write-list');

const writeList = () => {
    let text = '';
    myList.forEach(
        (i) => { text += `<li> ${i} </li>`}
    )
    list.innerHTML = text;
};

listBtn.addEventListener('click', writeList)

// Oppgave 5
const htmlPlaceholder = document.getElementById("placeholder");
const select = document.getElementById("select");
const text = document.getElementById("text");
const createBtn = document.getElementById("create");

const createElement = () => {
    const htmlEl = select.value;
    const Message = text.value;
    htmlPlaceholder.innerHTML = `<${htmlEl}>${Message}</${htmlEl}>`;
};

createBtn.addEventListener("click", createElement);

// Oppgave 6
const parent = document.getElementById("list");
const removeBtn = document.getElementById("remove-li");

const removeLi = () =>{
    const lastEl = parent.lastElementChild;
    if (lastEl){
        parent.removeChild(lastEl);
    }
}

removeBtn.addEventListener('click',removeLi)

// Oppgave 7
const txtBox = document.getElementById("name");
const orderBtn = document.getElementById("order");

window.addEventListener('keyup', ()=>{
    checkTxtBox()
});

const checkTxtBox = () => {
    if(txtBox.value.length <= 4){
        orderBtn.disabled = false;
        orderBtn.style = "border : 1px solid gray";
    } else {
        orderBtn.disabled = true;
        orderBtn.style = "border: 3px solid red";
    }
}

// Oppgave 8
const Parent = document.querySelector(".children");
const children = Parent.querySelectorAll("li");
const colorBtn = document.getElementById("color");

const addColor = () =>{
    Array.from(children).forEach((li, index) => {
        if ((index + 1) % 2 === 0){
            li.style = "border: 2px solid pink";
        } else{
            li.style = "border: 2px solid green";
        }
    });
}

colorBtn.addEventListener("click", addColor);