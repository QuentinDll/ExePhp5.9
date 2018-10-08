$(function(){
  var regexName = /^[a-zA-Z\-éèàâåçûîôð]+/
  var regexMail = /^[a-zA-Z.0-9\_\-]+[\@]+[\.]+/
  var regexNumb = /^[\#]+[\+]+[0-9]+/

  $('#firstName').blur(function(){
    if (regexName.test(regexName)){
      alert('#firstName' + '#lastName');
    }else{
      alert('Sorry invalid caracter');
    }
  });
});
