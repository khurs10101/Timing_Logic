p=Promise.resolve();

for(let i=1; i<10; i++){
    p= p.then(()=>{
        console.log("wait 30 sec: "+i);
        return new Promise((resolve, reject)=>{
            setTimeout(resolve,1000);
        });
    }).then((resolve)=>{
       
        if(i%4===0){
        console.log("wait 1 min: ");
        return new Promise((resolve, reject)=>{
            setTimeout(resolve,2000)
        });
        return;
    }
        
    });

}