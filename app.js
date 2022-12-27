const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input')

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

// delete todos
list.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
})

//function to match what is being typed with todos
const filterTodos = (term) => {
    Array.from(list.children)
        .filter((todo) => {
            return !todo.textContent.toLowerCase().includes(term)
        })
        .forEach((todo) => {
            todo.classList.add('filtered');
        });

        Array.from(list.children)
        .filter((todo) => {
            return todo.textContent.toLowerCase().includes(term)
        })
        .forEach((todo) => {
            todo.classList.remove('filtered');
        });
}


//KEYUP EVENT
search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
    
})