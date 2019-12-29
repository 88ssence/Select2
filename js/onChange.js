/*
 * プルダウン選択時の画面遷移
 */

function showChooseData(){

	console.log("hello world!");

	obj = document.test.linkselect;

	index = obj.selectedIndex;
	value = obj.options[index].value;

	alert(value);

	location.href = "" + value;

}
