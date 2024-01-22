function login(){
    let username = document.getElementById("name").value;
    let password = document.getElementById("pw").value;

    if(username === "user@gmail.com" && password === "12345"){

      document.getElementById("form").action = "admin2.html";

    } else{
      alert("username atau password salah!");
    }

  }