type kittenChar = character

interface charStyle {
    size: number
    poseNo: number
    pose: Blob[]
}
interface CharFx {

    wave: number
}
interface charPen {
    isdrawing: boolean
    size: number

}

class character {
    name: string
    type: 'background' | 'character' | 'clone'
    isclone: boolean = false
    hasClones: number = 0
    cloneNo: number = 0
    x: number
    y: number
    style: charStyle = {
        size : 0,
        pose : [],
        poseNo : 1
    }
    Fx: CharFx
    constructor([x=0, y=0]: [number, number], style: charStyle) {
        this.x = x
        this.y = y
        if(style.poseNo < 0)style.poseNo = style.pose.length
        if(style.poseNo >= style.pose.length)style.poseNo = 0
        if(style.size < 0)style.size = 0
        this.style = style

    }
    clone() {
        if (this.type === 'background' || this.type === 'clone') return new Error(`Can't clone ${this.type} (at ${this.name})`)
        this.hasClones++
        return new class extends character {
            isclone = true
        }([this.x,this.y],this.style)
    }
}
