
(function(){
    const main = document.getElementById('main');
    window.addEventListener('resize', (e) => setHeight(e))
    
}())

function setHeight(e){
    let main = document.getElementById('main');
    console.log($(main).height())
}