function validate(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if(username == "rohit" && password == "1977"){
        alert("Login successfuly,");
    }else{
        alert("Login failed,");
    }
  }