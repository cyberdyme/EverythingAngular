export class Helper {
    
}

export function IsNumber(value: any): boolean {
  return typeof value === 'number' && 
    isFinite(value) && 
    Math.floor(value) === value;
} 

export function NumberWithinRange(value: number, minValue: number, maxValue: number): boolean {
  if(value >=minValue && value <=maxValue) {
    return true;
  }
  return false;
}

export function UpperCaseFirstAllWords(str: string) : string
{
    if(str == null || str == undefined){
      return str;
    }

    let pieces = str.split(" ");
    for (let i = 0; i < pieces.length; i++ )
    {
        var j = pieces[i].charAt(0).toUpperCase();
        pieces[i] = j + pieces[i].substr(1).toLowerCase();
    }
    return pieces.join(" ");
}
