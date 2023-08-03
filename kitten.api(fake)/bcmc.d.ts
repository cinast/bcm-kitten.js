/**
 * not official api
 * just for fun *(\*laugh\*)*
 * 
 * @version `4.11.8`
 * @KittenPlayerVsion `4.11.8`
*/
export module kitten {
    /**
     * a kitten project
     */
    const project = {

    }
    class Project {

        /**
         * 作用未知，不开放
         */
        readonly version = 25

        /**
         * 使用kitten版本
         */
        readonly application_version = "4.11.8"

        /**
         * 作品种类（其他类型作品尚未研究）
         */
        readonly work_type = "KITTEN"

        /**
         * 使用屏幕大小
         */
        size: {
            width: number = 0
            height: number = 0
        }

        /**
         * 作用未知，不开放
         */
        readonly type: 1

        /**
         * 作品名
         */
        project_name: string = ""

        /**
         * 屏幕（舞台）
         */
        theatre: {
            /**
             * 尚不明确作用
             */
            current_entity: ""

            current_scene: ""
            scenes_order: []
            scenes: {}
        }
        actors: {}
        videos: {}
        styles: {}
        style_collections: {}
        groups: {}
        timer: {}

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
            current_type: procedure
            midimusic: false
            mobile_control: false
            physics: false
            physics2: false
            video: false
            wood: false
        }
        hardware_type: ""
        is_partial: false
        compile_result: []
        ai_lab: {}
        broadcasts: {}
        preview: "https://creation.codemao.cn/445/kitten/(dase64)"
        author_nickname: ""
    }
}