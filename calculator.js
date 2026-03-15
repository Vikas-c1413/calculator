class Calculator {
    constructor() {
        this.reset();
        // this.append();
    }
    reset() 
    {
        this.currentvalue='';
        this.previousvalue='';
        this.operation=null;
    }
    append(number)
    {
        this.currentvalue=this.currentvalue.toString()+number.toString();
    }
    operator(op)
    {
        if(this.currentvalue=='')
            return
        if(this.previousvalue!='')
        {
            this.calculate();
        }
        if(result!=null)
        {
            result=this.currentvalue;
        }
        this.previousvalue=this.currentvalue;
        this.operation=op;
        this.currentvalue='';
    }
    calculate()
    {
        if(this.previousvalue==''||this.currentvalue=='')
            return
        let result;
        const prev= parseFloat(this.previousvalue);
        const cur= parseFloat(this.currentvalue);
        switch (this.operation) {
            case '+':
                result=prev+cur
                
                break;
            case '-':
                result=prev-cur
                
                break;
            case '*':
                result=prev*cur
                
                break;
            case '/':
                if(cur==0)
                    throw new Error("Invalid")
                result=prev/cur
                
                break;
                case '%':
                    result=prev%cur;
        
            default:
                return null;
            
                this.currentvalue=result;
                this.operation=null;
                this.previousvalue='';
                return result;
                
        }
        toggleSign() 
        { 
            this.currentValue = this.currentValue ? -this.currentValue : ''; 
        } 
        percentage()
         { 
            this.currentValue = this.currentValue ? this.currentValue / 100 : ''; 
        }
         backspace()
          { 
            this.currentValue = this.currentValue.toString().slice(0, -1); 
        }
         getDisplay()
          {
             return this.currentValue || '0'; 
            }
        }
    }
