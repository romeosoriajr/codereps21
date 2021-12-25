function calculate(s) {        
  let stack = [];                           
  let num = '';                             
  let sign = null                                                        
  for(let i = 0; i <= s.length; i++){                                    
    const curr = s[i];                                                 
    if(curr === ' ') continue;              
    if(!isNaN(curr)) {                      
      num+=curr;                            
    } else {                                
      num = Number(num)                                        
      switch(sign){                           
        case '+':                             
        case null:                                     
          stack.push(num)                              
          break;                                       
        case '-':                                      
          stack.push(-num)                                             
          break;                                                       
        case '*':                                                      
          stack.push(stack.pop()*num)                                  
          break;                                                       
        case '/':                                                    
          stack.push(parseInt(stack.pop()/num, 10))       
          break;                                          
      }                                                   
      sign = curr;                                      
      num = '';                                         
    }                                                   
  }                                                     
  return stack.reduce((a,b)=>a+b,0)                           
};
