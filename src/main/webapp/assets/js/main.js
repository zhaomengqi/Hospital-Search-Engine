var App = Ember.Application.create();

App.Router.map(function() {
  // index route is created by default
});

App.IndexController = Em.Controller.extend({
    actions: {
        doSearch: function(searchText) {
        	
//        	change searchText into lowerCase for case-insensitive
        	var Text = searchText.toLowerCase();
        	
            var self = this;
            self.set('results', null);
            
//          test url=http://localhost:8080/ROOT/web/patients/search by postman  
            Em.$.get('http://localhost:8080/ROOT/web/patients/search?query='+this.get('searchText')).then(function(results) {    	 
            
            	for (var i=0;i<results.length;i++) {
                    var docs = results[i].documents;
                    var name = results[i].name;
                    var newName = name.toLowerCase();
//                  var id = results[i].id;
//                  alert(name);
                    
                    var newDocs = [];                    
                    for (var j=0;j<docs.length;j++) {
                        parts = docs[j].split(":::");
                        var newParts = parts[0].toLowerCase();
                        
//                  avoid one person of two documents with the same title       
                        if(newParts==Text||newName==Text){
                            newDocs.push({
                            title: parts[0],
                            date: parts[1],
                            contents: parts[2]
                        });
                        }
                    }
                    
//             	    replace documents with newDocs                    
                    results[i].documents = newDocs;
                }
            	
            	self.set('results', results);
            });
            
          } 
      }
});        
            
