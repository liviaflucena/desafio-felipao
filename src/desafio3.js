class Heroi {
    constructor (nome, idade, tipo){
         this.nome = nome
         this.idade = idade
         this.tipo = tipo
        }

        atacar(){

            let ataque

            if (this.tipo === "mago"){
                ataque = "magia"

            }else if(this.tipo === "guerreiro"){
                ataque = "espada"

            }else if (this.tipo === "monge"){
                ataque = "artes marciais "

            }else if (this.tipo === "ninja"){
                ataque = "shuriken"

            }
            console.log(`o ${this.tipo} atacou usando ${ataque}`)
        }


}

const mago = new Heroi ("livia", 20, "mago")
const guerreiro = new Heroi ("leticia", 30, "guerreiro")
const monge = new Heroi ("luis", 25, "monge")
const ninja = new Heroi ("lucas", 18, "ninja")

mago.atacar()
guerreiro.atacar()
monge.atacar()
ninja.atacar()