var tryout=(function(module){
	module.doIt = function(resultObject){
		resultObject.prepend(Date() +'<br/>');
};

 return module;
}(tryout || {}));