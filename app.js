const addForm = document.querySelector('.add');
const list = document.querySelector('.todos')

const generateTemplate = (todo) => {
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
    `;
    list.innerHTML += html;
}


//attach a submit event listener to the form
addForm.addEventListener('submit',(e) => {
    e.preventDefault(); //prevent default behaviour

    const todo = addForm.add.value.trim(); //ge you the value from an input field
    if(todo.length){ //positive value = true, false otherwise
        generateTemplate(todo);
        addForm.reset()
    }
    
})