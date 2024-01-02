import './login.css'

export default function Login() {


  return (<>
    <div className="containerLogin">
       <div className="login">
        <form>
            <h2>Login</h2>
            <input type="text" />
            <input type="password" />
            <button>Iniciar sesión</button>
        </form>
       </div>
    </div>
  </>);
}
