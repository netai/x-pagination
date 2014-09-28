x-image-processing
==================

a simple pagination module in node.js and

So hope this library help someone like me.

Any ideas are appreciated.

##Installation

	npm install x-pagination --save

##How to use

  this module use is so easy just require module and call function
  
  		require('x-pagination');
			xip.upload(<raw file data>,<upload path>,<file name>);//image upload
			xip.resize(<upload path>,<width>,<height>);//image resize
			xip.crop(<upload path>,<width>,<height>,<X>,<Y>);//image crop

###Example

  Here i have give you a simple i think it will help
  
      var xip=require('x-pagination');
      //raw file data(product_pic is file field name)
			var product_image=req.files.product_pic;
			xip.upload(product_image,'./public/images/product/',dt_join);
			xip.resize('./public/images/product/thumb/',100,100);
			xip.crop('./public/images/product/crop/',100,100,20,20);

