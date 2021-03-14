module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let ArrFromStr = str.split('');

  for (let j = 0; j < ArrFromStr.length; j++) {
      for (let i = 0; i < bracketsConfig.length; i++) {
          let elem = bracketsConfig[i];

          if (stack.length && ArrFromStr[j] === elem[1] && stack[stack.length - 1] === elem[0]) {
              stack.pop();
              break;
          }
          if (ArrFromStr[j] === elem[0]) {
              stack.push(ArrFromStr[j]);
              break;
          }
          if (stack.length === 0 && ArrFromStr[j] === elem[1]) {
              return false;
          }
      }
  }

  if (stack.length === 0) {
      return true;
  } else {
      return false;
  };
};
