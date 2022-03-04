let array = new Map();

array.set('10', 'Hola1');   
array.set(10, 'Hola2');    
array.set(false, 'Hola3'); 

document.write(array.get('10'));
document.write(array.get(10));
document.write(array.get(false));