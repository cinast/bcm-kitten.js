/**
*dependonkitten4.11.8
*/
const config = {
    version: 25,
    application_version: '4.11.8',
    work_type: 'KITTEN',
    type: 1,
    hardware_type: '',
    is_partial: false,
}
let theatre = {
    current_entity: '',
    current_scene: '',
    scenes_order: [],
    scenes: {},
    actors: {},
    videos: {},
    styles: {},
    style_collections: {},
    groups: {},
    timer: {}
},
    command = {
        variables: {},
        variable_order: [],
        cloud_variables: {},
        audio: {},
        audio_order: [],
        midimusic: [],
        midi_order: [],
        matrix: {},
        models: {},
        toolbox: {
            lang: false,
            cellphone: false,
            pen: false,
            advanced: true,
            ai_lab: false,
            block_ai_classification: false,
            block_ai_game: false,
            block_hardware_arduino: false,
            block_hardware_microbit: false,
            block_hardware_weeemake: false,
            camera: false,
            cloud_list: false,
            cloud_variable: false,
            cognitive: false,
            current_type: 'procedure',
            midimusic: false,
            mobile_control: false,
            physics: false,
            physics2: false,
            video: false,
            wood: false
        },
        hardware_type: '',
        is_partial: false,
        compile_result: [],
        ai_lab: {},
        /**disable*/
        broadcasts: {},
        /**disabled*/
        preview: '',

    }
let project = {
    size: {
        width: 0,
        height: 0
    },
    project_name: '',
    author_nickname: ''
    ,
    /**disabled*/
    broadcasts: {},
    /**disabled*/
    preview:"",
}

export { config, command, theatre }