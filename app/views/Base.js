module.exports = function(response, template) {
	this.response = response;
	this.template = template;
};
module.exports.prototype = {
	extend: function(properties) {
		var Child = module.exports;
		Child.prototype = module.exports.prototype;
		for(var key in properties) {
			Child.prototype[key] = properties[key];
		}
		return Child;
	},
	render: function(data) {
		if(this.response && this.template) {
			this.response.contentType('text/html');
			data.text.replace(/\r\n/g, '<br />');
			console.log('from the BaseView>>>>>>>>>',data.text)
			this.response.send(this.template, data);
		}
	}
}