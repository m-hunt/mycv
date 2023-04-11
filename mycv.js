jQuery(document).ready(function (){
	
	//$("#bobo_img").on('click', function(e){
		//$('.img_modal').css('visibility', 'visible');
	//});
	
	//$("#bobo_img").on("click",function(){
    //var $img = $("finish_photo_div").children("img").clone();
		//console.log($img);
		 //$(".img_modal").append($img);
		 
		//var $cloned_img = $img.prop("class", "cloned_finish_img");
		//console.log($cloned_img);
    //$(".img_modal").append($cloned_img);
		
//$('#your_modal_id').clone().prop("id", "new_modal_id").appendTo("target_container");
//});
	
	
	$("#bobo_img").on("click",function(){
		$('.img_modal').css('visibility', 'visible');
    var $img_clone = $(this).clone().removeAttr('height width');//$img_clone is now the clone of the thumbnail
		$(".img_modal").append($img_clone[0]);
		console.log($img_clone);
		var img = $img_clone.prop("id","cloned_img");
		console.log($(img).prop('id'));//shows 'cloned_img'
		//console.log($img);
		console.log($(img)[0].width()); //This shows <img id="cloned_img" src="images/finish.jpg" style="width: 50px;"> 
		console.log('#'+$(img)[0]); //shows #[object HTMLImageElement]
		
		console.log('#'+$(img)[0]);
		//$(".img_modal").append($(img)[0]);//this appends the image but it's still too long. I want to access the image in modal by a seperate identifier so that I can modify its dimensions
		
		console.log($(img).width());//this shows a jQuery object
		var img_id = img[0].id;
		var cloned_id = "#"+img_id;

		console.log(cloned_id);//shows #cloned_img
		console.log($(cloned_id).width('50px'));//THIS FUCKING WORKS!!!!!!!!!!!!!!!! So set the its height and/or width to the height/width of the modal
		console.log($(cloned_id).width());//shows 50px.
		console.log($('.img_modal').width());//shows a value. So get the width and the height of the modal and then..............FFS, figure it out in the morning.
		// $(cloned_id).removeClass('finish_img');
		//$("."+(img[0].className)).height('10%');
		//console.log($("."+img[0]).className);
		//console.log($("."+(img[0].className[0])));
    //$(".img_modal").append(img[0]);
});

$("#cloned_img").on("click",function(){
	$(this).remove();
});
	
	
	
	
	
	
	

});