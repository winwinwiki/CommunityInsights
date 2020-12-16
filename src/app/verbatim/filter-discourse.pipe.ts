import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
  name: "filter"
})
export class FilterDiscoursePipe implements PipeTransform {
  transform(discourses: any[], args:any) {
    // if all are empty then return original discourses data
    var impact_area_id = args.impact_area_id;
    var sentiment = args.sentiment;
    var source = args.source;
    var type = args.type;
    if (
      impact_area_id.length == 0 &&
      sentiment.length == 0 &&
      source.length == 0 &&
      type.length == 0
    )
      return discourses;
    const result = [];
    for (var i = 0; i < discourses.length; i++) {
      if (impact_area_id.length != 0) {
        var bingo = false;
        var impact_area_ids = discourses[i].impact_area_id.split(",");
        for (var id of impact_area_id) {
          if (impact_area_ids.includes(id.toString())) {
            bingo = true;
            break;
          } // else continue to loop
        }
        
        if (!bingo) continue;
      }
      if (sentiment.length != 0)
        if (!sentiment.includes(discourses[i].sentiment)) continue;
      if (source.length != 0)
        if (!source.includes(discourses[i].platform_name)) continue;
      if (type.length != 0) if (!type.includes(discourses[i].type)) continue;
      result.push(discourses[i]);
    }
    return result;
  }
}
