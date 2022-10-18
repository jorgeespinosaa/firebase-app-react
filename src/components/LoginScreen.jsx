import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useForm } from "../hooks/useForm";
import { showMessage } from "../helper/showMessage";

export const LoginScreen = () => {
  const [user, handleInputChange] = useForm();
  const { email, password } = user;

  const navigate = useNavigate();
  const { login, loginGoogle, loginFacebook, loginGithub } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const credential = await login(email, password);
      showMessage("Welcome back " + credential.user.email);
      navigate("/");
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        showMessage("User does not exist", "error");
      } else if (error.code === "auth/wrong-password") {
        showMessage("Incorrect password", "error");
      } else {
        showMessage(error.code, "error");
      }
    }
  };

  const onLoginGoogle = async () => {
    try {
      const userGoogle = await loginGoogle();
      showMessage("Welcome " + userGoogle.user.displayName);
      navigate("/");
    } catch (error) {
      showMessage(error.code, "error");
    }
  };

  const onLoginFacebook = async () => {
    try {
      const userFacebook = await loginFacebook();
      showMessage("Welcome " + userFacebook.user.displayName);
      navigate("/");
    } catch (error) {
      showMessage(error.code, "error");
    }
  };

  const onLoginGithub = async () => {
    try {
      const userGithub = await loginGithub();
      showMessage("Welcome " + userGithub.user.displayName);
      navigate("/");
    } catch (error) {
      showMessage(error.code, "error");
    }
  };

  return (
    <div className="row animate__animated animate__fadeIn ">
      <form onSubmit={handleLogin} className="col-md-5 offset-md-3 mt-3">
        <label className="col-sm-2 col-form-label">Email</label>
        <input
          className="form-control"
          autoComplete="off"
          type="email"
          placeholder="email@gmail.com"
          required
          name="email"
          onChange={handleInputChange}
        />

        <label className="col-sm-2 col-form-label">Password</label>
        <input
          className="form-control"
          autoComplete="off"
          type="password"
          placeholder="*********"
          required
          name="password"
          onChange={handleInputChange}
        />

        <button className="btn btn-primary mt-3 w-100">Login</button>
        <div className="mt-1 mb text-center">
          <Link className="navbar-brand" to="/recover">
            Forgot your password?
          </Link>
        </div>
        <hr />
      </form>
      <div className="p-10 col-md-5 offset-md-3 mt-3 ">
        <button onClick={onLoginGoogle} type="button" className="btn btn-info">
          Google
        </button>
        <button
          onClick={onLoginFacebook}
          type="button"
          className="btn btn-primary mx-3 mr-4"
        >
          Facebook
        </button>
        <button onClick={onLoginGithub} type="button" className="btn btn-light">
          GitHub
        </button>
      </div>
    </div>
  );
};
