import { getUser } from "../utils/auth";

export default function Configuracion() {
  const user = getUser();
  return (
    <div>
      <h1>Configuración</h1>
      <p>Usuario: {user?.usuario}</p>
      <p>Ciudad: {user?.ciudad}</p>
    </div>
  );
}