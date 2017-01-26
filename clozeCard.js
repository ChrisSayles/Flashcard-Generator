console.log("cloze file linked");

function ClozeCard(text,cloze){
	this.text = text;
	this.cloze = cloze;

	this.fullText = function(){
		return this.text + this.cloze;
	}
};