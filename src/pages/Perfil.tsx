import { getUser } from "../utils/auth";

export default function Perfil() {
  const user = getUser();
  return (
    <div>
      <h1>Perfil</h1>
      <p>Usuario: {user?.usuario}</p>
      <p>Rol: {user?.rol}</p>
      <p>Ciudad: {user?.ciudad}</p>
    </div>
  );
}