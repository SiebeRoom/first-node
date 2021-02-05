const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

function getGroup()
{
    readline.question('wat is uw geboortedatum (JJJJMMDD): ', datum => {
        let group = (datum % 7)+1;
        //geboortedatum is mooier geschreven
        console.log('Uw geboortedatum is: ' + datum.substring(6,8) + '/' + datum.substring(4,6) + '/' + datum.substring(0,4));
        console.log('je bent toegewezen aan groep: ' + group);
        readline.close();
      });

}
getGroup();

