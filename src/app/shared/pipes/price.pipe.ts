import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'price',
})


export class PricePipe implements PipeTransform{
    transform(value: number) {
        let result="R$ ";
        if(value>=1000)
        {
            let initial = value.toString();
            let length = initial.length;
            let mod = length%3;
            let count = length-mod;
            
            switch(mod)
            {
                case 1: 
                    result +=initial[mod-1]+" ";
                    break;
                case 2:
                    result +=initial[mod-2];
                    result +=initial[mod-1]+" ";
                    break;
            }

            for (let i=mod; i<length;i++)
            {
                result += initial[i];
                count--;
                if(count%3==0 && i!=length-1)
                    result += " "; 
            }
        }
        else {
            result +=value
        }
        result +=",00";
        return result;
    }

}