
/*

1. Prompt user for Rock Paper or Scissors

2. Generate computer response of Rock Paper or Scissors.

3. Compare computer and user entries.
    - User paper
        a. vs paper -- DRAW
        b. vs scissors -- LOSE
        c. vs rock -- WIN
    - User Rock
        a. vs paper -- LOSE
        b. vs scissors -- WIN
        c. vs rock -- DRAW
    - User Scissors
        a. vs paper -- WIN
        b. vs scissors -- DRAW
        c. vs rock -- LOSE

4. Display winning or losing Results

5. Update Score

*/

var player = prompt('Enter \'P\' for paper -- \'R\' for rock -- \'S\' for scissors');
var computer = ['P','R','S'];
var computerChoice = computer[Math.floor(Math.random() * computer.length)];
if (player === computerChoice) {
        alert('DRAW');
        document.write('<h1 class="playerH1">You chose ' + player + '</h1>');
        document.write('<h1 class="computerH1">Computer chose ' + computerChoice + '</h1>');
    }
    else if (player === 'P' & computerChoice === 'R') {
        alert('YOU WIN');
        document.write('<h1 class="playerH1">You chose ' + player + '</h1>');
        document.write('<h1 class="computerH1">Computer chose ' + computerChoice + '</h1>');
    }
    else if (player === 'P' & computer === 'S') {
        alert('YOU LOSE');
        document.write('<h1 class="playerH1">You chose ' + player + '</h1>');
        document.write('<h1 class="computerH1">Computer chose ' + computerChoice + '</h1>');
    }
// player as paper above
    else if (player === 'R' & computer === 'S') {
        alert('YOU WIN');
        document.write('<h1 class="playerH1">You chose ' + player + '</h1>');
        document.write('<h1 class="computerH1">Computer chose ' + computerChoice + '</h1>');
    }
    else if (player === 'R' & computer === 'P') {
        alert('YOU LOSE');
        document.write('<h1 class="playerH1">You chose ' + player + '</h1>');
        document.write('<h1 class="computerH1">Computer chose ' + computerChoice + '</h1>');
    }
// Player as rock statements above 
    else if (player === 'S' & computer === 'R') {
        alert('YOU LOSE');
        document.write('<h1 class="playerH1">You chose ' + player + '</h1>');
        document.write('<h1 class="computerH1">Computer chose ' + computerChoice + '</h1>');
    }
    else if (player === 'S' & computer === 'P') {
        alert('YOU WIN');
        document.write('<h1 class="playerH1">You chose ' + player + '</h1>');
        document.write('<h1 class="computerH1">Computer chose ' + computerChoice + '</h1>');
    }
// Player as scissor statements above

    else (document.write('<h1 class="computerH1">Computer chose ' + computerChoice + '</h1>') & 
    document.write('<h1 class="playerH1">You chose ' + player + '</h1>'));


/*

To Dos:

1. Consolidate w

*/