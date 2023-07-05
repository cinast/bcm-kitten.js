/**
*depend on kitten4.11.8
*/
import { randomId } from "./lib.js"

interface rotate_center {
    x: number
    y: number
}
interface rotate_center_painter extends rotate_center { }
interface pivot extends rotate_center { }

class chara {
    readonly id: string
    styles: string[]
    actors: string[]
    x: number = 0
    y: number = 0
    scale: number = 100
    rotation: number = 0
    rotation_type: 0
    draggable: boolean = false
    group_order: []
    workspace_offset: {
        x: 0
        y: 0
    }
    name: string = ""
    current_style_id: string
    screen_name: string
    visible: boolean = true

    constructor(name: string, x: number, y: number, scale: number, rotation: number, visible: boolean, ...other) {
        this.name = name
        this.id = randomId()
        this.x = x
        this.y = y
        this.scale = scale
        this.rotation = rotation
        this.visible = visible
        for (let i of other) Object.assign(this, i)
    }
}

class bcm4Style {
    readonly id: string
    name: string = "新角色"
    readonly url: string
    readonly cdn_url: string
    rotate_center: rotate_center
    pivot: pivot
    rotate_center_painter: rotate_center_painter
    constructor(name: string, url: string, cdn_url: string, urltype: "bcm" | "opath" = "bcm", rotate_center_painter: rotate_center_painter, rotate_center: rotate_center, pivot: pivot) {
        this.name = name
        this.cdn_url = urltype == "bcm" ? `"https://creation.codemao.cn/445/"${cdn_url}` : cdn_url
        this.url = urltype == "bcm" ? `"https://creation.codemao.cn/445/"${url}` : url
    }
}

class bcm4 {
    readonly version: 25
    readonly application_version: '4.11.8'
    readonly work_type: 'KITTEN'
    readonly type: 1
    hardware_type: ''
    theatre: {
        current_entity: ''
        current_scene: ''
        scenes_order: []
        scenes: {}
        actors: {}
        videos: {}
        styles: {}
        style_collections: {}
        groups: {}
        timer: {}
    }
    variables: {}
    variable_order: []
    cloud_variables: {}
    audio: {}
    audio_order: []
    midimusic: []
    midi_order: []
    matrix: {}
    models: {}
    toolbox: {
        lang: false
        cellphone: false
        pen: false
        advanced: true
        ai_lab: false
        block_ai_classification: false
        block_ai_game: false
        block_hardware_arduino: false
        block_hardware_microbit: false
        block_hardware_weeemake: false
        camera: false
        cloud_list: false
        cloud_variable: false
        cognitive: false
        current_type: 'procedure'
        midimusic: false
        mobile_control: false
        physics: false
        physics2: false
        video: false
        wood: false
    }
    compile_result: []
    ai_lab: {}
    /**disable*/
    broadcasts: {}
    /**disabled*/
    size: {
        width: 0
        height: 0
    }
    project_name: ''
    author_nickname: ''
    is_partial: false
    /**disabled*/
    preview: ""
}
