const w = window,
d = document;

export default function menuPegajoso(){
    const $menu = d.querySelector(".menu");
    let altura = $menu.offsetHeight;
    

    w.addEventListener("scroll", e => {
        if(w.scrollY >= altura - 39){
            $menu.classList.add("sticky-top");
        }else{
            $menu.classList.remove("sticky-top");
        }
    });
}