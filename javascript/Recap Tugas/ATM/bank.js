   let saldo = 50000;
   
   function getaction() {
   
   var p = document.getElementById ('number').value;
   var a = 1212;
   
   if(p==a)
   { 
       document.getElementById ('options12'). style.display = 'block';
       document.getElementById ('options10'). style.display = 'block';
   }
   else
   {
   window.alert("pin salah")
   }
   }
   
   /// untuk cek saldo
   function cek(){
    document.getElementById('ceksaldo').innerHTML = `Saldo Rp.${saldo}-,`;
   }
   /// untuk menampilkan setor tunai
   function setor(){
      
       let tf    = alert("Trasaksi sukes")+confirm("Apakah anda Transaksi lagi?jika iya masukan lagi nilai Nominal yang anda ingin kan!")
       if (saldo += parseInt(document.getElementById('setor').value));{(tf)}
   }
   /// untuk menampilkan Tarik tunai
   function tarik(){
       if(saldo - parseInt(document.getElementById('tarik').value) < 50000){
           alert('maaf saldo anda tidak cukup')
           
       }
       else{
           saldo -= parseInt(document.getElementById('tarik').value);
           alert("Trasaksi sukes")+confirm("Apakah anda Transaksi lagi?jika iya masukan lagi nilai Nominal yang anda ingin kan!")
       }
   }
   /// untuk menampilkan Nabung
   function nabung(){
       let tf    = alert("Uang sudah di masukan Ketabungan")
       saldo += parseInt(document.getElementById('nabung').value);
       
   }
   /// untuk keluar
   function exit(){
       var c = confirm('Apakah anda ingin keluar?')
   if(c==true){ document.getElementById ('options12').style.opacity = 0;
}
   else{
    document.getElementById ('options12').style.opacity = 10;
   }
   }
   //sistem newpin
 function gantipin(){
 window.confirm('apakah anda ingin buat akun baru?');
 }