document.getElementById('next').onclick = function(){ // khi người dùng click vào nut next
    const widthItem=document.querySelector('.container__product-1').offsetWidth
    document.getElementById('listall').scrollLeft +=widthItem;

}
document.getElementById('prev').onclick = function(){ // khi người dùng click vào nut next
    const widthItem=document.querySelector('.container__product-1').offsetWidth
    document.getElementById('listall').scrollLeft -=widthItem;

}
const widthItem=document.querySelector('.container__product-1').offsetWidth
console.log(widthItem);
