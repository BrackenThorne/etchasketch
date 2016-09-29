// Delete old data, Create table data and insert it
var $tr = "<tr class='tablerow'></tr>"
var $td = "<td class='tablecol'><div class='sketch'></div></td>"

function createTable(size)
{	
	var tablesize=500/size;
	for (i=0; i<size; i++)
	{
		$("#divtable").append($tr);
	}
	
	for (i=0; i<size; i++)
	{
		$(".tablerow").append($td);
	}
	$(".tablerow").css({"padding":"0", "margin":"0"});
	$(".tablecol").css({"padding":"0", "margin":"0", "border":"1px solid black"});
	$("#divtable").css({"padding":"0", "margin":"0", "border-spacing":"0", "border-collapse":"collapse"});
	$(".sketch").css({ "height":tablesize, "width":tablesize, "background-color":"white"});
}

$(document).ready(function(){
	createTable(16);
	$(".sketch").mouseenter(function(){
		if($(this).css('background-color')== 'rgb(255, 255, 255)')
		{
			$(this).css("background-color","red")
		}
		else if ($(this).css('background-color')== 'rgb(255, 0, 0)')
		{
			$(this).css("background-color","white")
		}
	});
});


