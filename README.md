# Static Collection TimeZone


This package create:
     one collection inside database called scollection_timezones with all timezones available
     one api call on scollection/timezones/getbyname
     one function to initiate your select2 scollection.TimeZones.init(`${fieldname}`)


     <div class="form-group">
         <label class="control-label col-md-2">Time Zone</label>
         <div class="col-md-4">
             <select name="tz" data-placeholder="Time Zone"  class="form-control">
                 <option value="{{this.tz}}" selected="selected">{{this.tz}}</option>
             </select>
         </div>
     </div>


     Template.mytemplate.rendered = function(){
        scollection.TimeZones.init('tz'); //This initiate the select2 on the select and config the api call to this field
     }
