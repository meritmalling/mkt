// JavaScript Document
function getPageLink()
{
	var PageTitle = document.getElementsByTagName("title")[0].innerHTML;
	var PageURL0 = document.URL;
	// remove any URL encoded GET stuff from "?" to end - added 3/9/2011
	var Mark = PageURL0.indexOf("?");
	if (Mark>0)
	{
		var PageURL = PageURL0.substr(0,Mark);
	} else {
		var PageURL = PageURL0;	
	}
	
	var DestinationPage = "http://beta.calculatorsoup.com/scripts/linkpop.php";
	var PageLink = DestinationPage + "?t=" + PageTitle + "&amp;l=" + PageURL;
	// pop up not working in IE
	//var WriteLink = "<a href=\"" + PageLink + "\"  onclick=\"window.open(\'" + PageLink + "',\'" + PageTitle + "\',\'width=500,height=400,toolbar=no,menubar=no,scrollbars=yes,resizable=yes\');return false;\" rel=\"nofollow\"><img src=\"/images/buttons/link02.gif\" alt=\"HTML code to link to this page\" width=\"18\" height=\"18\"  style=\"border:0; margin:0 4px 0 2px;\" /></a>";
	// var WriteLink = "<a href=\"" + PageLink + "\" rel=\"nofollow\" title=\"HTML code to link to this page\"><em>Link to Here:</em> <img src=\"/images/buttons/link02.gif\" alt=\"HTML code to link to this page\" width=\"24\" height=\"24\"  style=\"border:0; margin:0 4px 0 2px;\" /></a>";
	var WriteLink = "<a href=\"" + PageLink + "\" rel=\"nofollow\" title=\"HTML code to link to this page\">Link to this page.</a>";
	document.write(WriteLink);
}