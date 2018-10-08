$(function(){
  var regexName = /^[a-zA-Z\-éèàâåçûîôð]+$/;
  var regexMail = /^[a-zA-Z.0-9\_\-]+[\@]+[\.]+$/;
  var regexNumb = /^[\#]+[\+]+[0-9]+$/;

  $('#submit').click(function(){
    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();
    var mail = $('#mail').val();
    var phoneNumb = $('#pphoneNumb').val();

    if (regexName.test(firstName) && regexName.test(lastName) && regexMail.test(mail) && regexNumb.test(phoneNumb)){
      alert('Your first name: ' + firstName + '\nYour last name: '+lastName+'\nYour mail addresse'+mail+'\nYour phone number: '+phoneNumb);
    }

  });
});
