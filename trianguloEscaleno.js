/* En este desafío debes calcular la altura sin decimales de un triángulo escaleno (todos sus lados son distintos) o false en caso de que los parámetros recibidos no cumplan los requisitos del triángulo escaleno.

Input

trianguloEscaleno(16,8,10)
trianguloEscaleno(6,6,6)

Output

4
false */

function solution(lado1, lado2, lado3) {
    if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
        return false;
    } else {
        return Math.floor(Math.sqrt((lado1 + lado2 + lado3) * (-lado1 + lado2 + lado3) * (lado1 - lado2 + lado3) * (lado1 + lado2 - lado3)) / 4);
    }
    }