interface Person {
    id: number;
    name: string;
    surname: string;
    birthday: Date;
  }

  const Oscar: Person = {
    id: 182110056,
    name: 'Oscar',
    surname: 'Rodríguez',
    birthday: new Date(2003, 10, 28)
  };
  const Luis: Person = {
    id: 182110033,
    name: 'Luis',
    surname: 'Lopez',
    birthday: new Date(2004, 2, 6)
  };

  console.log(Oscar)
  console.log(Luis)

  class Persona {
    protected nombre:string;
    protected edad:number;
  
    constructor(nombre:string, edad:number) {
      this.nombre = nombre;
      this.edad = edad;
    }
  
    imprimir() {
      console.log(`Nombre: ${this.nombre}`);
      console.log(`Edad: ${this.edad}`);
    }    
  }
  
  class Empleado extends Persona {
    private sueldo:number;
    constructor(nombre:string, edad:number, sueldo:number) {
      super(nombre, edad);
      this.sueldo = sueldo;
    }
  
    imprimir() {
      super.imprimir();
      console.log(`Sueldo: ${this.sueldo}`);      
    }
  
    pagaImpuestos() {
      if (this.sueldo>5000)
        console.log(`${this.nombre} debe pagar impuestos`);
      else
        console.log(`${this.nombre} no debe pagar impuestos`);
    }
  }
  const persona1=new Persona('Juan', 44);
  persona1.imprimir();
  
  const empleado1=new Empleado('Ana', 22, 7000);
  empleado1.imprimir();
  empleado1.pagaImpuestos();
  