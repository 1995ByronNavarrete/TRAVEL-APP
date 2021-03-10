const d = document,
$enlace = d.querySelector(".rest-btn"),
$info = d.querySelector(".rest-info"),
$cajaRest = d.querySelector(".caja-rest");

export default function showRestaurantes(){
    d.addEventListener("click", e => {
        e.preventDefault();
        if(e.target === $enlace){
            $enlace.classList.add("ocultar");
            $info.classList.add("ocultar");
            $cajaRest.classList.add("is-active");
        }
    })
}