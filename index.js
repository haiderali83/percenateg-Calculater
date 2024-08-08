function calculate(){
    let sub1 = parseInt(document.getElementById('sub1').value);
    let sub2 = parseInt(document.getElementById('sub2').value);
    let sub3 = parseInt(document.getElementById('sub3').value); 
    let sub4 = parseInt(document.getElementById('sub4').value); 
    let sub5 = parseInt(document.getElementById('sub5').value); 
    let tmMarks= document.getElementById('tm1').value;
    let sum = sub1 + sub2 + sub3 + sub4 + sub5 
    let res = (sum/tmMarks )* 100
    alert(res + '%' )

    if (res >= 40){
        alert('you have passed')
    }
    else if( res<= 39)
    
    alert('u have failed')

    else 
        alert('invalid input')
    }
