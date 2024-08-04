module.exports = function toReadable(number) {
  if (number === 0) {
    return 'zero';
  } 
  
  let result = '';
  let hundreds = Math.floor(number / 100);
  let numberWithoutHundrets = number % 100;
  let tens = Math.floor(numberWithoutHundrets / 10);
  let units = numberWithoutHundrets % 10;
  
  if (hundreds > 0) {

    switch(hundreds) {
        case 1:
            result += 'one';
            break;
        case 2:
            result += 'two';
            break;
        case 3:
            result += 'three';
            break;
        case 4:
            result += 'four';
            break;
        case 5:
            result += 'five';
            break;
        case 6:
            result += 'six';
            break;
        case 7:
            result += 'seven';
            break;
        case 8:
            result += 'eight';
            break;
        case 9:
            result += 'nine';
            break;
    }
    result += ' hundred';

    if (number % 100 === 0) {
        return result;
    }
    result += ' ';
  }
  
  if (numberWithoutHundrets >= 20) {

    switch(tens) {
        case 2:
            result += 'twenty';
            break;
        case 3:
            result += 'thirty';
            break;
        case 4:
            result += 'forty';
            break;
        case 5:
            result += 'fifty';
            break;
        case 6:
            result += 'sixty';
            break;
        case 7:
            result += 'seventy';
            break;
        case 8:
            result += 'eighty';
            break;
        case 9:
            result += 'ninety';
            break;
    }

    if (units > 0) {
        result += ' ';
    }
  }
  
  if (numberWithoutHundrets >= 10 && numberWithoutHundrets < 20) {

    switch(numberWithoutHundrets) {
        case 10:
            result += 'ten';
            break;
        case 11:
            result += 'eleven';
            break;
        case 12:
            result += 'twelve';
            break;
        case 13:
            result += 'thirteen';
            break;
        case 14:
            result += 'fourteen';
            break;
        case 15:
            result += 'fifteen';
            break;
        case 16:
            result += 'sixteen';
            break;
        case 17:
            result += 'seventeen';
            break;
        case 18:
            result += 'eighteen';
            break;
        case 19:
            result += 'nineteen';
            break;
    }
    return result;
  }

  else {
    switch(units) {
        case 1:
            result += 'one';
            break;
        case 2:
            result += 'two';
            break;
        case 3:
            result += 'three';
            break;
        case 4:
            result += 'four';
            break;
        case 5:
            result += 'five';
            break;
        case 6:
            result += 'six';
            break;
        case 7:
            result += 'seven';
            break;
        case 8:
            result += 'eight';
            break;
        case 9:
            result += 'nine';
            break;
    }
    return result;
  }
}
