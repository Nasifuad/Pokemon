import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";

const BattleSection = () => {
  const data = useContext(AuthContext);
  return (
    <div>
      <h1>{data.name}</h1>
    </div>
  );
};

export default BattleSection;
