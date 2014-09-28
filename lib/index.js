var total_pages = -1;//items
var limit = null;
var target = ""; 
var page = 1;
var adjacents = 2;
var showCounter = false;
var className = "pagination";
var parameterName = "page";
var cat=0;
var type=0;
var queString=false;        
var optQueString=false;
var nextT = " &gt;&gt;";
var nextI = "";
var prevT = "&lt;&lt; ";
var prevI = "";
var startChar="?";
var calculate = false;
var pagination;
		
exports.init=function(){};
//Total items
exports.items=function(value){total_pages = value;};
//how many items to show per page
exports.limit=function(value){limit = value;};
//Page to sent the page value
exports.target=function(value){target = value;};
//Current page
exports.currentPage=function(value){page = value;};
//query string separetor
exports.queryString=function(value){queString = value;};     
//query string separetor
exports.optionalQueryString=function(value){optQueString = value;};  	
exports.setStartChar=function(value){startChar = value;};
//How many adjacent pages should be shown on each side of the current page?
exports.adjacents=function(value){adjacents = value;};
//show counter?
exports.showCounter=function(value){value=(typeof value!='undefined')?value:'';showCounter=(value===true)?true:false;};
//to change the class name of the pagination div
exports.changeClass=function(value){value=(typeof value!='undefined')?value:'';className=value;};
exports.nextLabel=function(value){nextT = value;};
exports.nextIcon=function(value){nextI = value;};
exports.prevLabel=function(value){prevT = value;};
exports.prevIcon=function(value){prevI = value;};
exports.catSet=function(catid){cat = catid;};
exports.catType=function(cat_type){type=cat_type;};
//to change the class name of the pagination div
exports.parameterName=function(value){value=(typeof value!='undefined')?value:'';parameterName=value;};

exports.getOutput=function(){
				if(!calculate)
					if(this.generate())
						return '<div class="'+className+'">'+pagination+'</div>\n';
			};
exports.get_pagenum_link=function(id){
	var qs='';
		  if(optQueString){
		      qs=optQueString;
		  }
		if(queString){
		      return target+startChar+parameterName+'='+id+qs;
		  }
		else if(target.indexOf('?'))
			return target+'/'+parameterName+'/'+id+qs;
		else
			return target+'/'+parameterName+'/'+id+qs;
			};
exports.generate=function(){
	pagination = "";
	calculate == true;
	error = false;
	if(total_pages < 0){
		console.log("It is necessary to specify the number of pages ("+total_pages+")");
		error = true;
		}
	if(limit == null){
		console.log("It is necessary to specify the limit of items to show per page (limit(10))");
		error = true;
		}
	if(error)return false;
	n = (nextT+' '+nextI).trim();
	p = (prevI+' '+prevT).trim();
	/* Setup vars for query. */
	if(page) 
		start = (page - 1) * limit;             //first item to display on this page
	else
		start = 0;                                //if no page var is given, set start to 0
	/* Setup page vars for display. */
	prev = page - 1;                            //previous page is page - 1
	next = page + 1;                            //next page is page + 1
	lastpage = Math.ceil(total_pages/limit);        //lastpage is = total pages / items per page, rounded up.
	lpm1 = lastpage - 1;                        //last page minus 1
	/* 
		Now we apply our rules and draw the pagination object. 
		We're actually saving the code to a variable in case we want to draw it more than once.
	*/
	if(lastpage > 1){
		if(page){
			//anterior button
			if(page > 1)
				pagination += '<a href="'+this.get_pagenum_link(prev)+'" class="prev">'+p+'</a>';
			else
				pagination += '<span class="disabled">'+p+'</span>';
			}
			//pages	
		if (lastpage < 7 + (adjacents * 2)){//not enough pages to bother breaking it up
			for (counter = 1; counter <= lastpage; counter++){
				if (counter == page)
					pagination += '<span class="current">'+counter+'</span>';
				else
					pagination += '<a href="'+this.get_pagenum_link(counter)+'">'+counter+'</a>';
			}
		}
		else if(lastpage > 5 + (adjacents * 2)){//enough pages to hide some
		//close to beginning; only hide later pages
			if(page < 1 + (adjacents * 2)){
			for (counter = 1; counter < 4 + (adjacents * 2); counter++){
				if (counter == page)
					pagination += '<span class="current">'+counter+'</span>';
				else
					pagination += '<a href="'+this.get_pagenum_link(counter)+'">'+counter+'</a>';
			}
			pagination += '...';
			pagination += '<a href="'+this.get_pagenum_link(lpm1)+'">'+lpm1+'</a>';
			pagination += '<a href="'+this.get_pagenum_link(lastpage)+'">'+lastpage+'</a>';
			}
			//in middle; hide some front and some back
			else if(lastpage - (adjacents * 2) > page && page > (adjacents * 2)){
				pagination += '<a href="'+get_pagenum_link(1)+'">1</a>';
				pagination += '<a href="'+get_pagenum_link(2)+'">2</a>';
				pagination += '...';
				for (counter = page - adjacents; counter <= page + adjacents; counter++)
					if (counter == page)
						pagination += '<span class="current">'+counter+'</span>';
					else
						pagination += '<a href="'+get_pagenum_link(counter)+'">'+counter+'</a>';
						pagination += '...';
						pagination += '<a href="'+get_pagenum_link(lpm1)+'">'+lpm1+'</a>';
						pagination += '<a href="'+get_pagenum_link(lastpage)+'">'+lastpage+'</a>';
			}
			//close to end; only hide early pages
			else{
				pagination += '<a href="'+get_pagenum_link(1)+'">1</a>';
				pagination += '<a href="'+get_pagenum_link(2)+'">2</a>';
				pagination += '...';
				for (counter = lastpage - (2 + (adjacents * 2)); counter <= lastpage; counter++)
					if (counter == page)
						pagination += '<span class="current">'+counter+'</span>';
					else
						pagination += '<a href="'+get_pagenum_link(counter)+'">'+counter+'</a>';
				}
			}
			if(page){
			//siguiente button
				if (page < counter - 1)
					pagination += '<a href="'+this.get_pagenum_link(next)+'" class="next">'+n+'</a>';
				else
					pagination += '<span class="disabled">'+n+'</span>';
				if(showCounter)pagination += '<div class="pagination_data">('+total_pages+' '+Pages+')</div>';
			}
			}
		return true;
};
