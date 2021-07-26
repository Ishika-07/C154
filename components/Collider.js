AFRAME.registerComponent("fish",{
    init: function(){
        for(var i = 1; i <= 20; i++){

        var id = `fish${i}`;

      var pos_x =(Math.random() * 1000 + (-50));      
      var pos_y = (Math.random() * 500 + (-50));
      var pos_z = (Math.random() * 60 + -40);

        var position={x:pos_x, y:pos_y, z:pos_z}
        
        this.createFishes(id, position);
        }
        console.log(id)
    },
    createFishes: function(id, position){
        const sea = document.querySelector("#underwater");
        const fish_entity = document.createElement("a-entity");

        fish_entity.setAttribute("id",id);
        fish_entity.setAttribute("postion",position);
        fish_entity.setAttribute("gltf-model","./assets/turtle/scene.gltf")
        fish_entity.setAttribute("visible", true)
        fish_entity.setAttribute("scale",{x:100, y:100, z:100})

        sea.appendChild(fish_entity)
        console.log("Fishes");
    }
})