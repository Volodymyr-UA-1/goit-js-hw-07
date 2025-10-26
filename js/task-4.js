const form = document.querySelector(".login-form");
form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    const enterEmail = document.querySelector('input[type="email"]');
    const enterPassw = document.querySelector('input[type="password"]');
    if (enterEmail.value.trim() === "" || enterPassw.value.trim() === "") {
        alert('All form fields must be filled in');
    }
    else {
        const formObject = {
            email: enterEmail.value.trim(),
            password: enterPassw.value.trim()
        };
        console.log(formObject);
        form.reset();
    }
})