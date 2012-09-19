jQuery(function(){
	if (window.PIE)
	{
		// используем файлик htc 
		jQuery('.site-blocks .b-head,  .site-head-menu div, .site-head-menu').each(function(){
			PIE.attach(this);
			//alert('s');
		});
		
	}
	//alert();
	
});