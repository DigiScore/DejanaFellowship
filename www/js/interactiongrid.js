

//interaction grid

var rows = 15
var cols = 15

function rectangle(x,y,width, height){

	var rect;
	rect = document.createElementNS('http://www.w3.org/2000/svg',"rect"); 

	rect.setAttributeNS( null,'x',x );
    rect.setAttributeNS( null,'y',y );
    rect.setAttributeNS( null,'width',width );
    rect.setAttributeNS( null,'height', height );
    rect.setAttributeNS( null,'fill', "#ffffff" );
    rect.setAttributeNS(null, "id", "r"+x+""+y)

    // rect.setAttributeNS(null, "stroke", "#000000")
    // rect.setAttributeNS(null, "stroke-width", 1)


    rect.intersects = function(x,y){
    	
    	//Center coordinates   
    	
    	// Can be simplified by storage
   		
   		var rwidth = this.getAttribute("width")
   		var rheight = this.getAttribute("height")

   		var centerx = rect.getAttribute("x") 
   		var centery = rect.getAttribute("y")

   		//console.log("check " + Math.abs(centerx - x) + "  ,  " + Math.abs(centery - y))
   		if ( Math.abs(centerx - x) < rwidth && Math.abs(centery - y) < rheight){
   			console.log("rectangle intersects")
   			//control opacity with distance
   			let opacity = (Math.abs(centerx - x)/rwidth + Math.abs(centery - y)/rheight)/2  
   			rect.setAttributeNS(null,"fill-opacity", opacity)

   		}
   		else{
   			rect.setAttributeNS(null,"fill-opacity", 1)

   		}

    }

    return rect
}

export function createRect( svg ){

	var svgw = svg.getAttribute("width")
	var svgh = svg.getAttribute("height")
	var rwidth = (svgw - svgw%cols)/cols
	var rheight = (svgh - svgh%rows)/rows
	console.log(rwidth + " , " + rheight)
	var rectangles = []

	for(var i=0; i<rows;i++){
		for(var j=0;j<cols; j++){
			var robj = rectangle(j*rwidth, i*rheight, rwidth, rheight)
			svg.appendChild(robj)
			rectangles.push(robj)
		}
	}

	return rectangles

}