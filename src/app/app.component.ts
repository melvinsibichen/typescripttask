import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {  
    this.example(); 
  }

  example(){
    var variable1='Hello';
    var variable2='world';
    var variable3='welcome';

    if(2>1){
      var variable1='goodbye';
      let variable2='universe';
      console.log('1',variable1)
      console.log('2',variable2)
      console.log('3',variable3)
    }
    console.log('4',variable1)
      console.log('5',variable2)
      console.log('6',variable3)
  }
 


}

// var example1

// var i
//   for( i=0;i<2;)
//   {
//     console.log(i)
//     i++;
//   }



// var example2

  // for(var i=0;i<2;i++){

  // }
  // console.log(i)


  // let example1


  // for(let i=0;i<2;i++){
  //   console.log(i)
  // }
  

   // const example1
  //  for (const i=0; i<2; i++){
  //   console.log(i)
  //  }
