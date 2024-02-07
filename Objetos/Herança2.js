{
  const pai = { nome: "Pedro", corCabelo: "preto" };

  const filha1 = Object.create(pai);
  filha1.nome = "Ana";
  console.log(filha1.corCabelo);

  const filha2 = Object.create(pai, {
    nome: { value: "Bia", writable: false, enumerable: true },
  });

  console.log(filha2.nome);
  filha2.nome = "Carla";
  console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`);

  console.log(Object.keys(filha1));
  console.log(Object.keys(filha2));

  for (let key in filha2) {
    filha2.hasOwnProperty(key)
      ? console.log(key)
      : console.log(`Por herança: ${key}`);
  }
} // aula 1
{
  function MeuObjeto() {}
  console.log(MeuObjeto.prototype);

  const obj1 = new MeuObjeto();
  const obj2 = new MeuObjeto();
  console.log(obj1.__proto__ === obj2.__proto__);
  console.log(MeuObjeto.prototype === obj1.__proto__);

  MeuObjeto.prototype.nome = "Anônimo";
  MeuObjeto.prototype.falar = function () {
    console.log(`Bom dia! Meu nome é ${this.nome}`);
  };

  obj1.falar();

  obj2.nome = "Rafael";
  obj2.falar();

  const obj3 = {};
  obj3.__proto__ = MeuObjeto.prototype;
  obj3.nome = "Obj3";
  obj3.falar();

  // Resumindo a loucura...
  console.log(new MeuObjeto().__proto__ === MeuObjeto.prototype);
  console.log(MeuObjeto.__proto === Function.prototype);
  console.log(Function.prototype.__proto__ === Object.prototype);
  console.log(Object.prototype.__proto__ === null);
} // aula 2
{
  console.log(typeof String);
  console.log(typeof Array);
  console.log(typeof Object);

  String.prototype.reverse = function () {
    return this.split("").reverse().join();
  };

  console.log("Escola Cod3r".reverse());

  Array.prototype.first = function () {
    return this[0];
  };

  console.log([1, 2, 3, 4, 5].first());
  console.log(["a", "b", "c"].first());

  String.prototype.toString = function () {
    return "Lascou tudo";
  };

  console.log("Escola Cod3r".reverse());
} // aula 3
{
  function Aula(nome, videoID) {
    this.nome = nome;
    this.videoID = videoID;
  }

  const aula1 = new Aula("Bem Vindo", 123);
  const aula2 = new Aula("Até breve", 456);
  console.log(aula1, aula2);

  // simulando o new
  function novo(f, ...params) {
    const obj = {};
    obj.__proto__ = f.prototype;
    f.apply(obj, params);
    return obj;
  }

  const aula3 = novo(Aula, "Bem Vindo", 123);
  const aula4 = novo(Aula, "Bem Vindo", 456);
  console.log(aula3, aula4);
} // aula 4
