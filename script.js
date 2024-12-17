const canvas = document.querySelector("canvas")
const c = canvas.getContext("2d")

canvas.width = window.innerWidth;
canvas.height = window.innerHeight / 2;



class Player {
    constructor({position,velocity}){
        this.position = position
        this.velocity = velocity
    }

    draw(){
        c.beginPath()
        c.moveTo(this.position.x + 30, this.position.y)
        c.lineTo(this.position.x - 10, this.position.y - 10)
        c.lineTo(this.position.x - 10, this.position.y + 10)
        c.closePath()

        c.strokeStyle= "white"
        c.stroke()
    }

    update(){
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
    }
}

const player = new Player ({
    position: {x:canvas.width / 2, y:canvas.height / 2},
    velocity: {x:0, y:0},
})

player.draw()

console.log(player)

const keys = {
    w: {
        pressed: false,
    },
    A: {
        pressed: false,
    },
    D: {
        pressed: false,
    },
}
function animate(){
    window.requestAnimationFrame(animate)
    c.fillStyle = "black"
    c.fillRect(0, 0, canvas.width, canvas.height)

    player.update()

    if (keys.w.pressed) player.velocity.x = 2 
    else player.velocity.x = 0
}
 animate()

window.addEventListener('keydown', (event) => {
    switch(event.code){
        case 'KeyW':
            keys.w.pressed = true 
            break
        case 'KeyA':
            keys.a.pressed = true 
            break
        case 'KeyD':
            keys.D.pressed = true 
            break
    }
    console.log(event)

})
window.addEventListener('keyup', (event) => {
    switch(event.code){
        case 'KeyW':
            keys.w.pressed = false
            break
        case 'KeyA':
            keys.a.pressed = false
            break
        case 'KeyD':
            keys.D.pressed = false 
            break
    }
    console.log(event)

})