// document.getElementById("btn").addEventListener("click", () => {
//   document.getElementById("out").textContent = "Hello, JS!";
//   console.log("ボタンが押されました");
// });

// カウンター
// let n = 0; 
// const $count = document.getElementById("count"); 
// document.getElementById("btn").addEventListener("click", () => {
//     n += 1; 
//     $count.textContent = n;
//     if (n === 10) alert("到達！"); 
// }); 


// 入力フォーム
const $name = document.getElementById("name"); 
const $out = document.getElementById("out"); 

document.getElementById("btn").addEventListener("click", () => {
    if($name.value.trim() === ""){
        $out.textContent = "名前を入力してください"; 
        $out.style.color = "red"; 
    } else {
        $out.textContent = `こんにちは、${$name.value}さん！`; 
        $out.style.color = "black"; 
    }
}); 