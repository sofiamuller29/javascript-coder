let numero = parseInt(prompt("Ingrese el numero de la tabla que desea ver"))

for (let i=1; i<=10; i++){
    let resultado = numero*i
    console.log(i + " x " + numero + " = " + resultado)
}