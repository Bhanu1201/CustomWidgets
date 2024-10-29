var filterText = ['Brand','Segment','A', 'B', 'C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

dashboard.on('refreshstart', (el, args) => {
hideFilterToggle(el, args);
});

dashboard.on('widgetready', (el, args) => {
hideFilterToggle(el, args);
});

var hideFilterToggle = (el, args) => {
 for (index = 0; index < filterText.length; index++) { 
 var tag = $('span.ew-i-caption:contains(' + filterText[index] + ')', $('div.ew-panel'));
 $('label.custom-togglebtn__label', tag.parent().parent().parent().parent()).remove();
} 
}