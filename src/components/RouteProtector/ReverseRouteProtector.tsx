import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/store/hooks";

interface RouteProtectorProps {
  children: JSX.Element;
}

const ReverseRouteProtector = ({
  children,
}: RouteProtectorProps): JSX.Element => {
  const user = useAppSelector((state) => state.users.id);
  const navigate = useNavigate();
  const logged = user === "" ? false : true;

  useEffect(() => {
    if (logged) {
      navigate("/cards");
    }
  }, [logged, navigate]);

  return !logged ? children : <></>;
};

export default ReverseRouteProtector;
