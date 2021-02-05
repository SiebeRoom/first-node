const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

function getGroup()
{
    readline.question('wat is uw leeftijd', datum => {
        let group = (datum % 7)+1;
        console.log('Uw geboortedatum is: ' + datum);
        console.log('je bent toegewezen aan groep: ' + group);
        readline.close();
      });

}
getGroup();

