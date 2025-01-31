
const data = document.querySelector('.showdata');
const dname = document.querySelector('.displayName');
document.querySelector('.getBtn').addEventListener('click', ()=>{
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(
            (position) =>{
                 const { latitude, longitude } = position.coords;
                 data.textContent = `latitude is ${latitude}  and longitude is ${longitude}`;
                 data.style.color='white';
                 data.style.padding='10px';
                 const loc = `https://geocode.maps.co/reverse?lat=${latitude}&lon=${longitude}&api_key=679d466978273985152675jxu0eaa25`;
                 fetch(loc)
                 .then(res => res.json())
                 .then(data=>{
                     dname.textContent=data.display_name; 
                 })
            },
            (error)=>{
                data.textContent =  error.message;
                console.log(error.message);
            }
        );
    }
});