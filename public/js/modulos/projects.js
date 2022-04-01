import Swal from "sweetalert2";
import axios from "axios";

const btnDeleted = document.querySelector("#eliminar-proyecto");

btnDeleted.addEventListener("click", () => {
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
            Swal.fire("Eliminado!", "El proyecto fue eliminado.", "success");

            // Redireccionar
            setTimeout( () => {
                window.location.href= '/';
            }, 2000)
        }
    });
});
