export default function Perfil() {  
    //lee el usuario del localStorage
    const user = localStorage.getItem("user");
    const userData = user ? JSON.parse(user) : null;

    return (
        <div>
            <h1>Perfil de Usuario</h1>
            {userData ? (
                <div>
                    
                    <p><strong>Usuario:</strong> {userData.usuario}</p>
                    <p><strong>Ciudad:</strong> {userData.ciudad}</p>
                </div>
            ) : (
                <p>No hay información de usuario disponible.</p>
            )}
        </div>
    );
}
