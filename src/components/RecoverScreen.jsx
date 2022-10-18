import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";
import { useForm } from "../hooks/useForm";
import { showMessage } from "../helper/showMessage";

export const RecoverScreen = () => {
  const [user, handleInputChange] = useForm();
  const { email } = user;

  const { resetPassword } = useAuth();
  const navigate = useNavigate();

  const onBack = () => {
    navigate(-1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await resetPassword(email);
      showMessage("Check your email " + email);
    } catch (error) {
      showMessage(error.code, "error");
    }
  };

  return (
    <div className="row animate__animated animate__fadeIn">
      <form onSubmit={handleSubmit} className="col-md-5 offset-md-3 mt-3">
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
        <button
          onClick={onBack}
          type="button"
          className="btn btn-light mt-3 w-49 mx-1"
        >
          Back
        </button>

        <button className="btn btn-primary mt-3 w-49 mx-1">Recover</button>
      </form>
    </div>
  );
};
