import { useAuth } from "../context/AuthContext";
import { useForm } from "../hooks/useForm";
import { showMessage } from "../helper/showMessage";
import { useNavigate } from "react-router";

export const RegisterScreen = () => {
  const [user, handleInputChange] = useForm();
  const { email, password } = user;

  const navigate = useNavigate();
  const { register } = useAuth();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const credential = await register(email, password);
      navigate("/");
      showMessage("Welcome " + credential.user.email);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        showMessage("Email already in use", "error");
      } else if (error.code === "auth/invalid-email") {
        showMessage("Invalid email", "error");
      } else if (error.code === "auth/weak-password") {
        showMessage("Weak password", "error");
      } else {
        showMessage(error.code);
      }
    }
  };

  return (
    <div className="row animate__animated animate__fadeIn">
      <form onSubmit={handleRegister} className="col-md-5 offset-md-3 mt-3">
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
          type="password"
          placeholder="*********"
          required
          name="password"
          onChange={handleInputChange}
        />

        <button className="btn btn-primary mt-3 w-100">Register</button>
      </form>
    </div>
  );
};
