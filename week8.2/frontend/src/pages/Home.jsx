import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center p-70 gap-4">
      <p className="text-4xl font-bold ">PayTM</p>

      <Button
        label={"Signup"}
        onClick={(e) => {
          navigate("/signup");
        }}
      />
      <Button
        label={"Signin"}
        onClick={(e) => {
          navigate("/signin");
        }}
      />
    </div>
  );
}
