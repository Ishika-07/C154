AFRAME.registerComponent("coin", {
    init: function () {
      for (var i = 1; i <= 10; i++) {
        //id
        var id = `coin${i}`;
  
        //position variables     
        var pos_x =(Math.random() * 3000 + (-10000));      
      var pos_y = (Math.random() * 20 + (-10));
      var pos_z = (Math.random() * 30000 + -10000);
        var position = { x: posX, y: posY, z: posZ };
  
        //call the function
        this.createCoins(id, position);
      }
    } ,
  
    createCoins: function(id, position) { 
      
      var seaEl = document.querySelector("#underwater");
  
      var coinEl = document.createElement("a-entity");
  
      coinEl.setAttribute("id",id);
      coinEl.setAttribute("position",position);
      
      coinEl.setAttribute("material","color","#ff9100");
      
      coinEl.setAttribute("geometry",{ primitive: "circle",radius: 1 });  

  
      seaEl.appendChild(coinEl);
    }
  });
  
  