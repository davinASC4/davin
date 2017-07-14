// 

function Ballplayer(name, team, height, position, number, networth,isgood, pastteams){
    this.name = name;
    this.team = team;
    this.height = height;
    this.position = position;
    this.number = number;
    this.networth = networth;
    this.isgood = isgood;
    this.pastteams = pastteams;

}

var shaq = new Ballplayer ("Shaq O' Neal", "Celtics", " 7'1\" ", "center", 36, 3000000000, true, ["Lakers", "Heat", "Suns", "Cavs"]);

console.log(shaq);

console.log("--------------------------");

var lebron = new Ballplayer ("Lebron James", "Cavs", " 6' ", "all", 2323, 23232323, true, ["Celtics"]);

lebron.pastteams.push(lebron.team);
lebron.team = "Warriors";

console.log(lebron);






