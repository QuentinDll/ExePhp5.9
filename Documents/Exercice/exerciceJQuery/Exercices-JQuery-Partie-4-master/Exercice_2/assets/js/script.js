$(function(){
  var regex = /^[0-9][\,][\.]+$/;
  regex.test(gradeA && gradeB && gradeC && gradeD && gradeE);

  $('#calcOn').click(function(){
//conversion of value in to
    var gradeA = parseInt($('#gradeA').val());
    var gradeB = parseInt($('#gradeB').val());
    var gradeC = parseInt($('#gradeC').val());
    var gradeD = parseInt($('#gradeD').val());
    var gradeE = parseInt($('#gradeE').val());
    var acGrade = parseInt(gradeA + gradeB + gradeC + gradeD + gradeE);
    var acGradeResult = (acGrade / 5);
      alert(acGradeResult);

      if (acGradeResult < 10 && acGradeResult >= 0){
        alert('Lower then the average');
      }else if (acGradeResult < 13 && acGradeResult >= 10){
        alert('Average');
      }else if (acGradeResult < 16 && acGradeResult >= 13){
        alert('Good');
      }else if (acGradeResult < 20 && acGradeResult >= 16){
        alert('Very Good');
      }else if (acGradeResult == 20){
        alert('Perfect');
      }
  });
});
