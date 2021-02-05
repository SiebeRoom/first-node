function getGroup(datum)
{
    let group = (datum % 7)+1;
    console.log('Uw geboortedatum is: ' + datum);
    console.log('je bent toegewezen aan groep: ' + group);
}

getGroup(20010519);
getGroup(20200315);
getGroup(20051111);
getGroup(20061203);

