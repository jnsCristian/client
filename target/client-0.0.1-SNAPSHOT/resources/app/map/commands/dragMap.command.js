function DragMapCommand() {
	'user strict';
	
	 //Hammer js command
	
	  var privateHelpers = {

	    //determine translate values from a string like translate(X, Y)
		    getTranslation: function (transform) {
	      var g = document.createElementNS("http://www.w3.org/2000/svg", "g");
	      
	      g.setAttributeNS(null, "transform", transform);

	      var matrix = g.transform.baseVal.consolidate().matrix;
	      
	      return [matrix.e, matrix.f];
	    }
	  }
	  var mapHolder =  d3.select('#map-wrap'),
	  mapContainer = mapHolder.select('.map-content'),

	//make sure we've setup initial translate values
	  
	  mapSelector =  document.getElementById('map-wrap'),
	  rowSelector = mapSelector.querySelector('.map-row'),
	  hammertime = new Hammer(mapSelector);
	  mapContainer.attr('transform', 'translate(0, 0)');
  var hammerData = {
    containerWidth: mapSelector.clientWidth,
    containerHeight: mapSelector.clientHeight,

    //get total number of rows
    numberOfRows: Math.sqrt(atlantis.entity.map.places.length),//THIS NEEDS TO BE IN THE GLOBAL ENTITY OBJECT

    prevDeltas: {
      x: 0,
      y: 0,
    }
  }

  hammertime
    //event we're looking for
    .get('pan')
    
    //remove directional default limit and threshold
    .set({ 
      direction: Hammer.DIRECTION_ALL,
      threshold: 0
    });

  hammertime
    //on pan start
    .on("panstart", function(ev) {
      hammerData.prevDeltas.x = 0;
      hammerData.prevDeltas.y = 0;
    })
    
    //on continuous pan
    .on("pan", function(ev) {
      var 
        //get overall groupd width & height
        groupTotalWidth = document.querySelector('.map-content').getBBox().width,
        groupTotalHeight = document.querySelector('.map-content').getBBox().height,

        //get individual row height & width
        individualRowGroupHeight = rowSelector.getBoundingClientRect().height,
        individualRowGroupWidth = rowSelector.getBoundingClientRect().width,
        maxTranslateXDistanceAllowed = individualRowGroupWidth - hammerData.containerWidth,
        maxTranslateYDistanceAllowed = individualRowGroupHeight * hammerData.numberOfRows - hammerData.containerHeight,

        //calculate actual distances between delta movements
        distanceX = Math.abs(ev.deltaX) - Math.abs(hammerData.prevDeltas.x),
        distanceY = Math.abs(ev.deltaY) - Math.abs(hammerData.prevDeltas.y),

        //determine direction
        distanceXDirection = ev.deltaX < 0 ? -1 : 1,
        distanceYDirection = ev.deltaY < 0 ? -1 : 1,

        //get current translation values
        curTranslateX = privateHelpers.getTranslation(document.querySelector('.map-content').getAttribute('transform'))[0],
        curTranslateY = privateHelpers.getTranslation(document.querySelector('.map-content').getAttribute('transform'))[1],

        //determine if movement should occur on axes
        translateXDistance = curTranslateX + distanceX * distanceXDirection,
        translateYDistance = curTranslateY + distanceY * distanceYDirection,

        //prepare translate values for element
        translateX =  translateXDistance > 0 ? 0 : translateXDistance,
        translateY =  translateYDistance > 0 ? 0 : translateYDistance;

      console.log(individualRowGroupWidth, hammerData.containerWidth);

      //check if edges of the screen are reached -- X Axis
      if (Math.abs(translateX) > maxTranslateXDistanceAllowed) {
        translateX < 0 ? translateX = -1 * maxTranslateXDistanceAllowed : maxTranslateXDistanceAllowed;
      }


      //check if edges of the screen are reached -- Y Axis
      if (Math.abs(translateY) > maxTranslateYDistanceAllowed ) {
        translateY < 0 ? translateY = -1 * maxTranslateYDistanceAllowed : maxTranslateYDistanceAllowed;
      }

      //move our element
      mapContainer.attr('transform', 'translate( ' + translateX + ',' + translateY + ' )');

      //assign old delta values to compare with new ones
      hammerData.prevDeltas.x = ev.deltaX;
      hammerData.prevDeltas.y = ev.deltaY;
    })

    //on pan end
    .on('panend', function () {
      
    })

}