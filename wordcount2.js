
function count_words()
	{
		str1= document.getElementById("InputText").value;
		str1 = str1.replace(/(^\s*)|(\s*$)/gi,"");  
		str1 = str1.replace(/[ ]{2,}/gi," ");
		str1 = str1.replace(/\n /,"\n");
		document.getElementById("noofwords").textContent = str1.split(' ').length;
		document.getElementById("noofltr").textContent = str1.length - str1.split(' ').length + 1;
}

