
// 5 five button i click one button to change it`s backgroundcolor ok.

function blu(){
document.body.style.backgroundColor = "blue"
}

function gree(){
    document.body.style.backgroundColor = "green"
    }
    
    function re(){
        document.body.style.backgroundColor = "red"
        }
        
        function pin(){
            document.body.style.backgroundColor = "pink"
            }
            
            function yello(){
                document.body.style.backgroundColor = "yellow"
                }
                
// COUNTER APP

function inc(){
    var spa = document.querySelector('#count')
    var num = parseInt(spa.innerHTML)
    num += 1
    spa.innerHTML = num

}



function dec(){
    var spa = document.querySelector('#count')
    var num = parseInt(spa.innerHTML)
    num += -1
    spa.innerHTML = num

}