
function calcFizz(userChoice){
    // alert('IM running');
    var fizzArr = [];
    // console.log(userChoice);
    for(var i = 1; i <= userChoice; i++){
        if(i % 15 === 0){
            fizzArr.push('fizz buzz');
        } else if(i % 5 === 0){
            fizzArr.push('buzz');
        } else if(i % 3 === 0){
            fizzArr.push('fizz');
        } else {
            fizzArr.push(i);
        }
    }
    return fizzArr;
}

function showResults(fizzArr){
    // console.log(fizzArr);
    var result, itemClass, template, dataType;
    
    for (var i = 0; i < fizzArr.length; i++){
        // console.log(fizzArr[i]);
        itemClass = undefined;
        // console.log(typeof fizzArr[i]);
        dataType = typeof fizzArr[i];
        if (dataType === 'string'){
            itemClass = fizzArr[i];
        }
        template = '<div class="fizz-buzz-item '+itemClass+'">'+
                        '<span>'+fizzArr[i]+'</span>'+
                    '</div>';
        //this is to solve the undefined issue that we were
        //running into by not assigning an initial value to result
        if(i === 0){
            result = template;
        } else {
            result += template;
        }
    }
    $('.js-results').append(result);
}

$(function(){
    // alert("IM working");
    $('#number-chooser').submit(function(e){
        e.preventDefault();
        var userChoice = $('#number-choice').val();
        // console.log(userChoice);

        var fizzBuzz = calcFizz(userChoice);
        // console.log(fizzBuzz);
        showResults(fizzBuzz);
    });
    // console.log(userChoice); 
});