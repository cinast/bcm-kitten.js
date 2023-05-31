import { randomId } from './lib'

type kittenChar = character
type trigger = 'start' | 'on-screen' | 'on-sence' | 'leave-sence' | 'onclick' | 'isclone'

interface charStyle {
    size: number
    poseNo: number
    pose: charPoses[]
}
interface charPoses {
    visitable: boolean,
    id: string,
    img: Blob
}
interface charEffects{
    bright:number
    transparency:number
}
interface charFx {
    grey?:number
    pixelate?:number
    wave?: number
}
interface charPen {
    isdrawing: boolean
    size: number

}

class character {
    get id(): string {return this._id}
    _id:string = randomId()//const 不可变
    name: string = '新角色'
    type: 'background' | 'character' | 'clone'
    isclone: boolean = false
    hasClones: number = 0
    cloneNo: number = 0
    x: number = 0
    y: number = 0
    style: charStyle = {
        size: 0,
        pose: [],
        poseNo: 1
    }
    Fx: charFx
    events: { trigger: trigger, ev: Function }[]
    private vars:any[] = []

    constructor([x = 0, y = 0]: [number, number], style: charStyle) {
        this.x = x
        this.y = y
        if (style.poseNo < 0) style.poseNo = style.pose.length
        if (style.poseNo >= style.pose.length) style.poseNo = 0
        if (style.size < 0) style.size = 0
        this.style = style
    }
    clone() {
        if (this.type === 'background' || this.type === 'clone') return new Error(`Can't clone ${this.type} (at ${this.name})`)
        this.hasClones++
        const spuerchar = this
        return new class extends character {
            isclone = true
            cloneNo = spuerchar.hasClones
            name = `${spuerchar.name}_clone#${spuerchar.hasClones}`
        }([this.x, this.y], this.style)
    }
    addEvent(trigger: trigger, ...ev: Function[]) {
        ev.forEach((i) => {
            this.events.push({ trigger: trigger, ev: i })
        })
    }
    addPose(...pose: charPoses[]) {
        this.style.pose.push(...pose)
    }
}
export{
    kittenChar,trigger as eventsTrigger,
    charStyle,charFx,charEffects,
    charPen,charPoses,character
}