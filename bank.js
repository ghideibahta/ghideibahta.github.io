
window.onload= function(){

  
    let accountInfoList=[];
    var bankingModule= (function(){
  
      var name;
      var balance;
      function createAccount(){
      
        name= document.getElementById("txt1").value;
        balance=document.getElementById("txt2").value;
        if(name=="" || balance==""){
          return null;
        }
        return{
          ownerName: name,
          deposit: balance
        }
      
      }
    
      return {
        account: function(){
  
          return createAccount();
          
        }
      }
    
    }());
  
  
    var btn= document.getElementById("btn1");
    btn.onclick= latestupdate;
    
    function latestupdate(){
  
      var ownerinfo= bankingModule.account();
      if (ownerinfo==null){
        alert("name and deposit are required");
        return;}
  
      accountInfoList[accountInfoList.length]=ownerinfo;
      
      showAccounts();
  
    }
  
    function showAccounts(){
      var totaldeposit="";
      accountInfoList.forEach(function(item, index, array) {
        totaldeposit+= "Account Name: "+ item["ownerName"] + "   saving balance: "+ item["deposit"]+"\n";
      })
    
      document.getElementById("txt3").innerHTML= totaldeposit;
  
  
    }
    
   
  
    
  } 
    
    
  
  