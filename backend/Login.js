function login(name, email, password){
    try {
        if(name == "Anish" && email == "chocoboyanish566@gmail.com" && password == "abc"){
            console.log("ok"+ name);
        }
    } catch (error) {
        console.error(error);
    }
}

module.export = login;