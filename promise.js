
 function login(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log('login')
            resolve()
        }, 2000)
        
    })
        
}

 function getdata(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log('getdata')
            resolve()
        }, 8000)
    })
        
        
    
}
 function calculate_data(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log('calculate_data')
            resolve()
        }, 3000)
    })
        
    
}
 function send_sms(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log('send_sms')
            resolve()
        }, 1000)
    })
        
    
}
 function logout(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log('logout')
            resolve()
        }, 1000)
    })
        
    
}

login()
.then(getdata)
.then(calculate_data)
.then(send_sms)
.then(logout)
.catch(err => console.log('error'))

