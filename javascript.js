chrome.contextMenus.create({
  'title' : 'Search IMDB for "%s"',
  'contexts' : ['selection'],
  'onclick' : function(info, tab) {
     console.log('Selected link: ' + info.selectionText);
	 chrome.tabs.create({url: 'http://www.imdb.com/find?q=' + info.selectionText});
  }
});

