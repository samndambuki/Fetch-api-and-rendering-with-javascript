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
        const html = data.data.map(user => {
            return `
            <div class="user">
            <p><img src="${user.avatar}" alt="${user.first_name}"></p>
            <p>Name:${user.first_name}</p>
            <p>Email:${user.email}</p>
            </div>`;
           
        }).join("");
        // console.log(html);
        // document.querySelector('#app').innerHTML = '<h1>Hellooo</h1>'
        document.querySelector("#app").insertAdjacentHTML("afterbegin",html);
    }).catch(error=>{
        console.log(error);
    });
}

fetchData();


function postData(){
    fetch('https://reqres.in/api/users',{
        //options to fetch
        method:'POST',
        headers:{
            //what to post
            'Content-type':'applcation/json'
        },
        //turns it to json
        body:JSON.stringify({
            name:"morpheus",
            job:"leader"
        })

    }).then(response =>{
        // console.log(response);
        // const data = response.json();
        // console.log(data);
        console.log(response);
        if(!response.ok){
            throw Error('ERROR');
        }
        return response.json()
    }).then(data => {
        console.log(data);
    
    }).catch(error=>{
        console.log(error);
    });
}

postData();