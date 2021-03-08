messages=["Item currently unavailable!","Sold out!","Error 404: Stock not found!","This one flew off the shelves!","More stock coming soon!","What do you think the boss would say of we told him, 'We have -1 of these left'?","Please come back later!"]
function unavailable() {
	alert(messages[~~(Math.random() * messages.length)]);
}