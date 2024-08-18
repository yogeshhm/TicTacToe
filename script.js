$(document).ready(function(){

    $('.container').children().css({
        margin: '10px 0px'
    });
    
    //declarations starts-
    let playerX = true;
    let count = 0;
    let winTxt;
    const patterns = [
        [0, 1, 2],
        [0, 3, 6],
        [0, 4, 8],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
        [3, 4, 5],
        [6, 7, 8],
      ];
      let boxes = $('.box');
      let msg = $('.message')
    //   console.log(patterns)
    // declarations ends-
    
    boxes.get().forEach(box => {
        box.addEventListener('click',()=>{
            if(playerX){
                box.style.backgroundColor = "#4793AF";
                box.innerText = "X"
                playerX =false;
            }
            else{
                box.style.backgroundColor = "#F26F3C";
                box.innerText = "O"
                playerX =true;
            
            }
            box.disabled = true;
            count++;
    
    
            if (count===9){
                msg.text("Game is Tie Click NewGame or Reset")
                // msg.text("hello")
                playerX =true;
                count = 0;
            }
    
            //winner checking
            let checkWinner = () =>{
                for(let patrn of patterns){
                    let pos1 = boxes[patrn[0]].innerText;
                    let pos2 = boxes[patrn[1]].innerText;
                    let pos3 = boxes[patrn[2]].innerText;
                    if(pos1 && pos2 && pos3 !=""){
                        if(pos1 === pos2 && pos2 ===pos3){
                            winTxt = "Hurray! Winner is "+pos1+" !";
                            msg.text(winTxt);
                            boxes.prop('disabled',true);
                            count = 0;
                            playerX = true;
                            confetti();
    
                        }
                    }
                }
            }
            checkWinner();
             
        });
        
        
    });
    
    //reset starts
    let reset = () =>{
        boxes.prop('disabled', false);
        boxes.text("");
        boxes.css('backgroundColor',"");
        msg.text("")
        count =0;
    }
    
    $('#newGameBtn').click(function(){
        reset();
    })
    $('#resetBtn').click(function(){
        reset();
    })
    //reset ends
    
    
    
    });
    