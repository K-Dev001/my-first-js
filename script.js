// document.getElementById("btn").addEventListener("click", () => {
//   document.getElementById("out").textContent = "Hello, JS!";
//   console.log("ボタンが押されました");
// });

let n = 0; 
const $count = document.getElementById("count"); 
document.getElementById("btn").addEventListener("click", () => {
    n += 1; 
    $count.textContent = n;
    if (n === 10) alert("到達！"); 
}); 