import Swal from "sweetalert2";
import axios from "axios";

const btnDeleted = document.querySelector("#eliminar-proyecto");

if (btnDeleted) {
    btnDeleted.addEventListener("click", (e) => {
        const urlProject = e.target.dataset.proyectoUrl;
        // console.log(urlProyect);
        Swal.fire({
            title: "Eliminar proyecto?",
            text: "NOTA: Una vez eliminado no se puede recuperar!!!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sí, eliminarlo!",
            cancelButtonText: "No, cancelar"
        }).then((result) => {
            if (result.isConfirmed) {
                // Enviar petición axios
                const url = `${location.origin}/proyectos/${urlProject}`;
                console.log(url)
                
                axios.delete(url, { params: urlProject})
                    .then(function(respuesta) {
                        console.log(respuesta);
                    })
                    return;

                Swal.fire("Eliminado!", "El proyecto fue eliminado.", "success");
                // Redireccionar
                setTimeout( () => {
                    window.location.href= '/';
                }, 2000)
            }
        });
    });
}

export default btnDeleted;
