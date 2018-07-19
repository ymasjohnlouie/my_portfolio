// console.log('Hello world! I am ready for Full-Stack Web Development.')

var deleteLog = false;

$(document).ready(function() {
	$('#pagepiling').pagepiling({
		menu: '#menu',
		anchors: ['page1', 'page2', 'page3'],
	    sectionsColor: ['white', '#515689', '#7dcec8', '#51bec4'],
	    loopTop: true,
	    loopBottom: true
	});
});