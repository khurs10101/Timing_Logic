module.exports= ()=>{

    fakeArray= [4,5,9,2,1,0,6,7,9,2,0,0,9,8,7];

    p=Promise.resolve();

    for(let i=1; i<fakeArray.length; i++){
    p= p.then(()=>{
        console.log(fakeArray[i-1]);
        console.log("wait 30 sec: ");
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
}

