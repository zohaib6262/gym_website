//Select Dom Signup
const signupusernameAcount = document.querySelector(".usernameSignup")
const signupemailAcount = document.querySelector(".emailSignup")
const signuppasswordAcount = document.querySelector(".passwordSignup")
const signupBtn = document.querySelector(".btnSignup")
const signupClose = document.querySelector(".btnCloseSignup")

//Now add Event Listner's
signupBtn.addEventListener("click", createAccount)


function createAccount(e) {
    e.prventDefault();
    const addAccountUsername = signupusernameAcount.value;
    const addAccountEmail = signupemailAcount.value;
    const addAccountPassword = signuppasswordAcount.value;
    signupusernameAcount.appendChild(addAccountUsername)
    signupemailAcount.appendChild(addAccountEmail)
    signuppasswordAcount.appendChild(addAccountPassword)
    saveLocalUsername(signupusernameAcount.value)
    saveLocalEmail(signupemailAcount.value)
    saveLocalPassword(signuppasswordAcount.value)
    signupusernameAcount.value = " ";
    signupemailAcount.value = " ";
    signuppasswordAcount.value = " ";


}

function saveLocalUsername(value) {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(value);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function saveLocalEmail(value) {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(value);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function saveLocalPassword(value) {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(value);
    localStorage.setItem("todos", JSON.stringify(todos));
}


//Select Dom Login
const loginusernameAcount = document.querySelector(".usernameLogin")
const loginemailAcount = document.querySelector(".emailLogin")
const loginBtn = document.querySelector(".btnLogin")
const loginClose = document.querySelector(".btnCloseLogin")

//Now addEvent Listner
loginBtn.addEventListener("click", IsAccountOrNot)

function IsAccountOrNot(e) {

}