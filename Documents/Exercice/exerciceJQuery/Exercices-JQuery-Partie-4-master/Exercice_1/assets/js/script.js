$(function(){
  var numbWin = 0;
  var numbLose = 0;
  var numbTry = 0;

  $('#roll').click(function(){
    numbTry++;

    var userChoice = $('#selector').val();
    var cpuChoice = Math.floor(Math.random()*3);

    if(userChoice == cpuChoice){
      alert('Equality');

    }else if((cpuChoice == 3 && userChoice == 2) || (cpuChoice == 2 && userChoice == 1) || (cpuChoice == 1 && userChoice == 3)){
      alert('Lost');
      numbLose++;

    }else{
      alert('Win');
      numbWin++;
    }

    var result = Math.trunc((numbWin / numbLose)*100);
      alert('You have win ' + result + '% of game');
  });
});
