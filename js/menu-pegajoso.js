const w = window,
d = document;

export default function menuPegajoso(){
    const $menu = d.querySelector(".menu");
    let altura = $menu.offsetHeight;
    

    w.addEventListener("scroll", e => {
        console.log(w.scrollY, altura);
        if(w.scrollY >= altura -38){
            console.log(altura, w.scrollY)
            $menu.classList.add("sticky-top");
        }else{
            $menu.classList.remove("sticky-top");
        }
    });
}