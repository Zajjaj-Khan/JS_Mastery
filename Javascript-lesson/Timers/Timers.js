//setTimeout
// setTimeout(() => {
//   console.log("2 seconds timer");
// }, 2000);

//Notification FUnction
// function showNotification(message, duration) {
//   const Notification = document.createElement("DIV");

//   Notification.innerText = message;
//   Notification.className = "notification";
//   document.body.appendChild(Notification);
//   setTimeout(() => {
//     Notification.remove();
//   }, duration);
// }
//setInterval
// setInterval(() => {
//   console.log("Its Been Two Seconds");
// }, 2000);

//ClearInterval
//Epects Intervl ID to clear
// function startCount(duration) {
//   let time = duration;
//   const countDown = setInterval(() => {
//     console.log(time);
//     time--;
//     if (time < 0) {
//       clearInterval(countDown);
//       console.log("Timer Done");
//     }
//   }, 1000);
// }
// //clearTimeout
// // const cancelButton = document.querySelector("#button");
// // const timeOutId=setTimeout(()=>{
// //     window.location.href = "https://www.youtube.com";
// // },5000)
// // cancelButton.addEventListener("click",()=>{
// //     clearTimeout(timeOutId);
// //     console.log("Redirection Cancelled")
// // })

// //Debouncing
// function queryApi() {
//   console.log("API Called");
//   console.log("Making a API Request");
// }

// // let debounceTimeout;
// const searchInput = document.querySelector("#input");
// searchInput.addEventListener("input", (e) => {
//   clearTimeout(debounceTimeout);
//   debounceTimeout=setTimeout(()=>{
//     queryApi()
//   },1000)
// });

//Advanced Approch 
// function debounce(callback,delay){
//     let timeOutId;
//     return (...args)=>{
//         if(timeOutId){
//             clearTimeout(timeOutId);
//         }
//         timeOutId= setTimeout(()=>{
//             callback(...args);
//         },delay)
//     }   
// }
// const debounceAPIFunc = debounce(queryApi,3000);
// searchInput.addEventListener("input",debounceAPIFunc)



//Throttling
//- To control the frequency of Function call
//Function is called atleast one time in the given interval

// function getRandomColor(){
//     const red = Math.floor(Math.random()*256);
//     const green = Math.floor(Math.random()*256);
//     const blue = Math.floor(Math.random()*256);
//     return `rgb(${red},${green},${blue})`
// }



// const content = document.querySelector("#content");
// function loadMoreItem(){
//     console.log("Loading More Item");
//     const scrollDistanceToBottom = document.documentElement.scrollHeight - (window.scrollY + window.innerHeight);
//     if(scrollDistanceToBottom<100){
//         //ddItems();

//     for(let i=0;i<5;i++){
//         const div = document.createElement("DIV");
//         div.innerText="New Item";
//         div.className="item";
//         div.style.backgroundColor=getRandomColor();
//         content.appendChild(div);
//     }
// }
// }
// let isthrottled = false;

// window.addEventListener("scroll",()=>{
//     if(!isthrottled){
//         loadMoreItem();
//         isthrottled=true;
//         setTimeout(()=>{
//             isthrottled=false;
//         },5000)
//     }
// })
// loadMoreItem();


//Throlling Advanced Approch
// function throttle(callback,delay){
//     let isThrottled = false;
//     let savedArg = null;
//     const execcuteCallBAck = ()=>{
//         if(savedArg===null){
//             isThrottled=false;
//         }else{
//             callback(...savedArg);
//             savedArg=null;
//             setTimeout(execcuteCallBAck,delay)  
//         }
//     }
//     return (...args)=>{
//         if(!isThrottled){
//             callback(...args);
//             isThrottled=true;
//             setTimeout(()=>{
//                 isThrottled=false;
//             },delay)
//         }
//     }
// }
// const throttledLoadMoreItem = throttle(loadMoreItem,3000);
