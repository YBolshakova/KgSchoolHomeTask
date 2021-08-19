function solveQuadraticEquation(a,b,c){
    let x1, x2;
    let discriminant = b * b - 4 * a * c;   
        x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        x2 = (-b - Math.sqrt(discriminant)) / (2 * a);  
        return x1 + ',' + x2;         
    }
    console.log(solveQuadraticEquation(1,-1,-2));
    