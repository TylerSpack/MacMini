let countSelectedElements = array => {
    let numberSelected = 0;
    array.forEach(function(element){
        if (element.selected){
            numberSelected++;
        }
    });
    return numberSelected;
};

console.log(countSelectedElements([
    {selected: true},
    {selected: false},
    {selected: true},
]
));