let statistics = {
    redCars: 21,
    bluesCars: 45, 
    greenCars: 12,
    raceCars: 5,
    blackCars:40,
    rareCars:2
};
for(const prop in statistics){
    if(prop.substr(0,1)=='r'){
        console.log('${prop}: ${statistics[prop]}');
    }
    if(statistics[prop]%2!=0){
        console.log('${prop}: ${statistics[prop]}');
    }
}