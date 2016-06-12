var app = angular.module('myCvFilter', []);
app.filter('selecttype',[function(){
	return function(input, typeSelected) {
		var tableauAffiche = [];
    if(typeSelected=="All"){
      tableauAffiche=input;
    }
    else if(typeSelected=="Highlight"){
      input.forEach(function(exp){
        if(exp.Highlight){tableauAffiche.push(exp);}
      });
    }else{
      input.forEach(function(exp){
        if(exp.type==typeSelected){tableauAffiche.push(exp);}
      });
    }
		return tableauAffiche;
	}
}]);
