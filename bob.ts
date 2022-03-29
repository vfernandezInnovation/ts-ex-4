export function hey(message: unknown): unknown {
  if (isQuestion(message as string) && !isUpper(message as string)) {
    return "Sure.";
  } else if (isUpper(message as string) && !isQuestion(message as string)) {
    return "Whoa, chill out!";
  } else if (
    ((message as string).includes("!") && isUpper(message as string)) ||
    (isQuestion(message as string) && isUpper(message as string))
  ) {
    return "Calm down, I know what I'm doing!";
  } else if (isSpace(message as string)) {
    return "Fine. Be that way!";
  } else {
    return "Whatever.";
  }
}
function isUpper(str: string) {
  return !/[a-z]/.test(str) && /[A-Z]/.test(str);
}
function isSpace(str: string) {
  for (let i = str.length - 1; i > 0; i--) {
    let letter: string = str.charAt(i);
    
   
    
      if (letter == " ") continue;
      if (letter == "\t" || letter == "\r" || letter == "\n") {
        
        continue;
      }
    

    return false;
  }
  return true;
}

function isQuestion(str: string): boolean {
  
  for (let i = str.length - 1; i > 0; i--) {
    let letter: string = str.charAt(i);
   
    if (letter == " ") continue;
    if (letter == "?") return true;
    return false;
  }
  return false;
}
