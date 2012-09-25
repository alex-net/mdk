jQuery(function(){
	if (window.PIE)
	{
		// используем файлик htc 
		jQuery('.block-catalog .catalog-content,.block-shadow,.block-shadow-r, .site-blocks .b-head,  .site-head-menu div, .site-head-menu, .filter-container .input-data div select, .filter-container .gogo input, .titl-page-and-filter,.tovar-list ul li,.page-content-wrapper, .cart-item-count input,.cart-item-img, .checkout-form-wrapper, .checkout-form-wrapper input, .checkout-form-wrapper select, .checkout-form-wrapper textarea, .cart-to-checkout input, .go-to-cart input').each(function(){
			PIE.attach(this);
			//alert('s');
		});
		
	}
	jQuery('.param-filter-link a').click(function(){
		if (window.PIE)
			PIE.detach(jQuery('.titl-page-and-filter')[0]);
		jQuery('.filter-container').slideToggle(500);
		//jQuery.delay(500);
		
		if (window.PIE)
			setTimeout("PIE.attach(jQuery('.titl-page-and-filter')[0]);",500);
		return false;	
	});
	//alert();
	
});