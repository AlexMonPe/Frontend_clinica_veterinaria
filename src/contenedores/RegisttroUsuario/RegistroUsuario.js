const Register = () => {
    const history = useNavigate();
    const formSubmit = async (e) => {
      // Make the submit dont refresh the page
      e.preventDefault();
      try {
        const formData = {
          name: e.target[0].value,
          surname: e.target[1].value,
          email: e.target[2].value,
          password: e.target[3].value,
        };
  
        const postUser = await fetch("http://localhost:3000/users", {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          },
        });
  
        console.log("Form Sumbmit works", postUser);
  
        if (postUser) {
          history("/listado/" + postUser.userId);
        }
      } catch (error) {
        alert("no se ha cargado la bd " + error);
      }
    };
  
    return (
      <div>
        <h1>Registro</h1>
        <form onSubmit={(e) => formSubmit(e)}>
          <label for="name">Name</label>
          <input type="text" id="name" name="name" />
          <label for="surname">Surname</label>
          <input type="text" id="surname" name="surname" />
          <label for="email">email</label>
          <input type="email" id="email" name="email" />
          <label for="password">password</label>
          <input type="password" id="password" name="password" />
          <input type="submit" value="SEND" className="sendButton" />
        </form>
      </div>
    );
  };
  
  export default Register;
  