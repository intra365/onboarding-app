import latinize from 'latinize';

export interface suggestedUPNprefix  {
    prefix:string,
    available:boolean // reserved for future use
}


export function suggestedUPNs(displayName: string): Promise<suggestedUPNprefix[]> {
  return new Promise((resolve, reject) => {
    var name = displayName ? latinize(displayName.toLocaleLowerCase()) : "";
    var parts: string[] = name.split(" ");
    var results: suggestedUPNprefix[] = [];
    

    {
      var prefix: string = "";
      var dot: string = "";
      for (let index = 0; index < parts.length - 1; index++) {
        prefix = prefix + dot + parts[index];
        results.push(
            {
                prefix:prefix + "." + parts[ parts.length - 1],
                available:true
            }
            
            );
        dot = ".";
      }
    }

    resolve(results);
  });
}
