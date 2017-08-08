function RenderMapCommand() {
  'use strict';

//to be saved in global entity
var mapEntity = {
  //number of entries must be full sqrt
  numberOfRows: Math.sqrt(atlantis.entity.map.places.length),
  tileSize: 100
};

//check if number is integer, otherwise map wil break
if (mapEntity.numberOfRows % 1 !== 0) {
  console.error('Map engine doesn"t work with full sqrt() data. Shutting down.');

  return;
}


//run initial setup
var mapHolder =  d3.select('#map-wrap'),
  mapContainer = mapHolder.select('.map-content');

//make sure we've setup initial translate values
mapContainer.attr('transform', 'translate(0, 0)');

var mapSetupHelpers = {
  //fn to build initial <g> rows
  buildHorizontalRows: function (numberOfRows, selector) {
    for (var i = 0, ii = numberOfRows; i < ii; i++) {
      selector
        .append('svg:g')
        .attr('id', i)
        .attr('class', 'map-row')
    }
  },

  translateHorizontalRows: function (translateYValue, selector) {
    selector.selectAll('.map-row')
      .each(function (d, i) {
        d3.select(this)
          .attr('transform', 'translate(0, ' + i * translateYValue + ' )' )
      })
    },

  splitArrays: function (originalArray, numberOfRows) {
    var output = [];

    var numberOfOutputArrays = originalArray.length / numberOfRows;

    for (var i = 0; i < numberOfRows; i++) {
      if (i === 0) {
        output.push(originalArray.slice(i, numberOfOutputArrays));
      } else {        
        output.push(originalArray.slice(numberOfOutputArrays * i, numberOfOutputArrays * (i + 1) ));
      }
    }

    return output;
  },


}
var updatedData = mapSetupHelpers.splitArrays(atlantis.entity.map.places, mapEntity.numberOfRows);
mapSetupHelpers.buildHorizontalRows(mapEntity.numberOfRows, mapContainer);

mapSetupHelpers.translateHorizontalRows(mapEntity.tileSize, mapContainer);
  


  buildTileItems();

  
  function buildTileItems (dataItem, selection) {
    if (typeof mapSetupHelpers.splitArrays !== 'function') return;


/*    d3.selectAll('.map-row')

    var ns = 'http://www.w3.org/2000/svg';
    var foreignObject = document.createElementNS( ns, 'foreignObject');
    foreignObject.setAttribute('height', 50);
    foreignObject.setAttribute('width', 50)
    
    var div = document.createElement('div');
    div.innerHTML = 'Hello World';
    foreignObject.appendChild( div ); 
    d3.selectAll('.map-row')
      .each(function(d, i) {
        d3.select(this)
          .selectAll('rect')
          .data(updatedData[i])
          .enter()
          .append('rect')
          .attr('data-place-id', function (d, i) {
            console.log(d, i);
            return d.placeId;
          })
          .attr('width', function(d, i) {
            return mapEntity.tileSize;
          })
          .attr('height', function(d, i) {
            return mapEntity.tileSize;
          })
          .attr('x', function(d, i) {
            return i * mapEntity.tileSize;
          })
          .attr("fill", function() { return "hsl(" + Math.random() * 360 + ", 100%, 75%)" })

      });

          .attr('y', function(d, i) {
            return d.y
          })
          .attr('y1', function(d, i) {
            return d.x
          })
          .attr('class','x')
          .append('foreignobject')
          .append('div')
          .html('<p>A</p>');
          
          
        
      });
    /*d3.select('rect').appendChild(foreignObject);*/
   
    
 /*   var ns = 'http://www.w3.org/2000/svg';
    var svg = document.querySelector( 'svg' );
        d3.selectAll('.map-row')
    .each(function(d, i) {
    	var rect = document.createElementNS( ns, 'rect');
    	rect.setAttribute('height', 100);
    	rect.setAttribute('width', 100);
    	
    	rect.setAttribute('data-place-id',function(d, i) {
            return 0;
        }());
    	var foreignObject = document.createElementNS( ns, 'foreignObject');
    	foreignObject.setAttribute('height', 100);
    	foreignObject.setAttribute('width', 100);
    	var div = document.createElement('div');
    	div.innerHTML = function(d, i) {
            return 0;
        }();
    	foreignObject.appendChild(div); 
    	svg.appendChild(rect); 
    	svg.appendChild(foreignObject); 
    });
  */

  }
  
 
  atlantis.eventManger.fire('render.map.success');
  


 
}