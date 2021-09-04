// product increase decrease callback  function
function updateProductNumber(product,price,isIncreasing) {
    const productInput=document.getElementById(product+'Count');
    let productNumber=productInput.value;
    if (isIncreasing==true) {
        productNumber=parseInt(productNumber)+1;
    }
    else if (isIncreasing==false && productNumber>0) {
        productNumber=parseInt(productNumber)-1;
    }
    productInput.value=productNumber;
    //update product total
    const productTotal=document.getElementById(product+'Total');
    productTotal.innerText=productNumber*price;
    //calculate sub, tax and grand total
    getTotalCalculation();
};

//product input total Count for subtotal
function produtInputTotal(product) {
    const productInput=document.getElementById(product+'Count');
    const productNumber=parseInt(productInput.value);
    return productNumber;
};
// total calculation function
function getTotalCalculation() {
    const totalPhone=produtInputTotal('phone')*1200;
    const totalCase=produtInputTotal('case')*100;
    //sub total
    const subTotal=totalPhone+totalCase;
    // total tax count
    const tax=subTotal/10;
    // total shipping cost
    const shipping=document.getElementById('shipping').innerText;
     shippingCost=parseInt(shipping);
    const grandTotal=subTotal+tax+shippingCost;
    //update on the html
    document.getElementById('subTotal').innerText=subTotal;
    //update tax count
    document.getElementById('tax').innerText=tax;
    //update grand total
    document.getElementById('grandTotal').innerText=grandTotal;
};
// Plus sign event handler
document.getElementById('phonePlusSign').addEventListener('click',function(){
   updateProductNumber('phone',1200,true);
});
//minus sign event handler
document.getElementById('phoneMinusSign').addEventListener('click',function(){
    updateProductNumber('phone',1200,false);
   
});

//case increase decrease event handler
document.getElementById('casePlusSign').addEventListener('click',function(){
    updateProductNumber('case',100,true);
});
//case increase decrease event handler
document.getElementById('caseMinusSign').addEventListener('click',function(){
    updateProductNumber('case',100,false);
});
