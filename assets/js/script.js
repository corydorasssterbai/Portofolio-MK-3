document.getElementById('LoginForm').addEventListener('submit', function(event){
    event.preventDefault();

    const corrrectUsername = "Kania";
    const corrrectPassword = "Kania";

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === corrrectUsername && password === corrrectPassword){
       alert('Login Berhasil');
       window.location.href = 'index.html';
    }else{
        alert('Username atau password salah');
    }
});