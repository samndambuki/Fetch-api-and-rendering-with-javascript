function fetchData(){
    fetch('https://reqres.in/api/users').then(response =>{
        // console.log(response);
        // const data = response.json();
        // console.log(data);
        console.log(response);
        if(!response.ok){
            throw Error('ERROR');
        }
        return response.json()
    }).then(data => {
        console.log(data.data);
        document.querySelector('#app').innerHTML = '<h1>Helllooo</h1>'
    }).catch(error=>{
        console.log(error);
    });
}

fetchData();
