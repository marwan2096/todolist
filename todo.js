
document.querySelector('#enter').onclick = function(){
    if(document.querySelector('#data input').value.length == 0){
         document.write("data not enter")
    }

    else{
       
        document.querySelector('#tasks').innerHTML += `
            <div class="new">
                <span >
                    ${document.querySelector('#data input').value}
                </span>
                <span id="comp">
                attend
                </span>
                <button class="delete">
                    <p>delete</p>
                </button>
                <button class="complete">
                  comp
            </button>
            </div>
        `;

        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
        var task =document.querySelector(".complete").onclick = function(){
           
               document.getElementById("comp").innerHTML='complete lecture'
            }
    }
}