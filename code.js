const btn = document.querySelector("#button__test");
const btn_minus = document.querySelector("#button__test__minus")
const REST__API = "https://rickandmortyapi.com/api/character/?page=1"
let count = 0;
let  page = `https://rickandmortyapi.com/api/character/?page=${count}`;

btn.addEventListener("click", () => {
    count += 1
    console.log(count);
})

btn_minus.addEventListener("click", ()=>{
    if (count <= 1){
        return
    }else{
        count -= 1
        console.log(count);
    }
})

