document.addEventListener('DOMContentLoaded', function () {
    const firstName = localStorage.getItem('firstName');
    const lastName = localStorage.getItem('lastName');
    const email = localStorage.getItem('Email');
    const sex = localStorage.getItem('sex');
    const supportReason = localStorage.getItem('support');

    if (firstName) {
        document.getElementById('first-name').textContent = firstName;
    }
    if (lastName) {
        document.getElementById('last-name').textContent = lastName;
    }
    if (email) {
        document.getElementById('email').textContent = email;
    }
    if (sex) {
        document.getElementById('sex').textContent = sex;
    }
    if (supportReason) {
        document.getElementById('support-reason').textContent = supportReason;
    }
});

function logout()
{
    localStorage.removeItem("firstName");
    localStorage.removeItem("lastName");
    localStorage.removeItem("Email");
    localStorage.removeItem("sex");
    localStorage.removeItem("support");
    window.location.href = "index.html";
}