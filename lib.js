app.factory('allServices',function() {

	return{
		   rev:function(data) {
		   	  var lol = '';
		   	  for (var i = 0; i < data.length; i++) {
		   	  	lol = data.substr(i,1) + lol;
		   	  }
		   	  return lol;
		   },
		   up:function(data) {
		   	return data.toUpperCase();
		   },
		   low:function(data) {
		   	return data.toLowerCase();
		   },
		   rEvAgain:function(data) {
		   	var lol = '';
		   	  for (var i = 0; i < data.length; i++) {
		   	  	lol = lol + data.substr(i,1);
		   	  }
		   	  return lol;
		   }
	}
})