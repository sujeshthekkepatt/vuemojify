var path = require("path");
console.log(__dirname + "/vuemoji");
const smiley = {
  inserted: function(el) {
    let userMessage = el.innerHTML;
    let regex = /(\:[\(\)D])|([\&lt\;3]+)|(B\))|(\([yY]\))/g;

    let newUserMessage = userMessage.replace(regex, function(match) {
      switch (match) {
        case ":)":
          // return '<img alt=":)" class="_1ift _1ifu img" src="https://static.xx.fbcdn.net/images/emoji.php/v9/z6/1/32/1f642.png">';
          return '<img src="' + __dirname + "/vuemoji/1f60e.png" + '"/>';
          break;
        case ":(":
          return '<img alt=":(" class="_1ift _1ifu img" src="https://static.xx.fbcdn.net/images/emoji.php/v9/zdc/1/32/1f61e.png">';
          break;
        case "&lt;3":
          return '<img alt="<3" class="_1ift _1ifu img" src="https://static.xx.fbcdn.net/images/emoji.php/v9/z72/1/32/2764.png">';
          break;
        case ":D":
          return '<img alt=":D" class="_1ift _1ifu img" src="https://static.xx.fbcdn.net/images/emoji.php/v9/z88/1/32/1f600.png">';
          break;
        case "B)":
          return '<img alt="B)" class="_1ift _1ifu img" src="https://static.xx.fbcdn.net/images/emoji.php/v9/z3d/1/32/1f60e.png">';
          break;

        case "(y)":
          return '<img alt="(y)" class="_1ift _1ifu img" src="https://static.xx.fbcdn.net/images/emoji.php/v9/z2d/1/32/f0000.png">';
          break;
        case "(Y)":
          return '<img alt="(y)" class="_1ift _1ifu img" src="https://static.xx.fbcdn.net/images/emoji.php/v9/z2d/1/32/f0000.png">';
          break;
        default:
          return match;
          break;
      }
    });
    el.innerHTML = newUserMessage;
  }
};
// export default smiley;
