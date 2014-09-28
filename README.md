x-image-processing
==================

a simple and easy to use pagination module in node.js and

So hope this library help someone like me.

Any ideas are appreciated.

##Installation

	npm install x-pagination --save

##How to use

  this module use is so easy just require module and call function
  
  	xp=require('x-pagination');
	xp.target(<target page name>);
	xp.queryString(true);//url will query string like ?page=2
	//add extra query string (if queryString(true) then & or ?) like '?a=4'
	xp.optionalQueryString(<additional query>);
	xp.parameterName(<parameter name>);//default page
	xp.currentPage(<current page no>);//current page no.
	xp.items(<total record>);//total record
	xp.getOutput();//retern html string

###Example

  Here i have give you a simple i think it will help
  
      var xp=require('x-pagination');
	xp.target('my-product');
	limit=10;
	page=(typeof req.params.page!='undefined')?req.params.page:1;
	start=(page-1)*limit;
	xp.limit(limit);//limit for per page
	xp.currentPage(page);//current page no.
	xp.items(rows.length);//total record
	pg_div=xp.getOutput();//get html
	
	change in router.js file because your current url with pagination like
	
	http://<domain name>/<target page>/page/<page no>
	
	so add a new router rule like:
	
	/<target page>/page/:page

ok now i will describe what function you can use in pagination

##Function Description
####require('x-pagination');
	require pagination librery
	ex: xp=require('x-pagination');
####target(<target page name>)
	this use for set your target page what page will paginate
	* this function compulsary
	ex: xp.target('product-list');
####limit(<limit no>)
	this use for set limit of record how many record will show
	* this function compulsary
	ex: xp.limit(10);
####currentPage(<current page no>)
	this use for set current page no
	* this function compulsary
	ex: xp.currentPage(2);
####queryString(<true or false>)
	this use for how url will show like query string(product?page=1) 
	or seo/user friendly(product/page/1)
	this is default false
	ex: xp.queryString(false);
####optionalQueryString(<additional query>)
	this use for add extra query string with url
	if queryString set true then add '&' or not then use '?'
	also you can use seo/user friendly url('/search/3')
	ex: xp.optionalQueryString('?a=2');
####parameterName(<parameter name>)
	this use for set pagination parameter
	this is default is page
	ex: xp.parameterName('p');//url will product/p/3
####items(<total record>)
	this use for set total no record
	* this function compulsary
	ex: xp.items(200);
####getOutput()
	this is use for get generated html string
	* this function compulsary
	ex: xp.getOutput();
		
