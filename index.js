var rect= require('./rectangle');

function solveRectangle(l,b){
    console.log("Solving for rect with l= "+l+" and b="+b+" ");
    if(l<=0 || b<=0){
        console.log("rectangle dimensions must be greater than zero");
    }
    else{
        console.log("Area is: "+rect.area(l,b));
        console.log("Perimeter is: "+rect.perimeter(l,b));

    }
}

solveRectangle(2,7);
solveRectangle(3,7);
solveRectangle(0,4);