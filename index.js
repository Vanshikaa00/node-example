var rect= require('./rectangle');

function solveRectangle(l,b){
    console.log("Solving for rect with l= "+l+" and b="+b+" ");
  rect(l,b,(err,rectangle) => {
      if(err){
          console.log("ERROR: ",err.message);
      }
      else{
          console.log("Area of rectangle of dimensions l= "+l+" and b= "+b+" "+rectangle.area());
          console.log("Perimeter of rectangle of dimensions l= "+l+" and b= "+b+" "+rectangle.perimeter());

      }
  });
  console.log("call after delay!");
}

solveRectangle(2,7);
solveRectangle(3,7);
solveRectangle(0,4);