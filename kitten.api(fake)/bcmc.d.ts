/**
 * **not official** api  
 * just for fun *(\*laugh\*)*
 * 
 * @version `4.11.8`
 * @KittenPlayerVsion `4.11.8`
*/
export module kitten {
    /**
     * a kitten project
     */
    class Project {
        /**
         * 使用kitten版本  
         * 不允许创建后更改
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
         * 作品名
         */
        project_name: string = ""

        /**
         * 屏幕集合（舞台）
         */
        theatre = {
            /**
             * 当前屏幕
             */
            current_scene: "",
            /**
             * 屏幕uuid集合
             */
            scenes: []
        }
        /**
         * 角色列表
         */
        actors: {}
        // /**
        //  * 视频集合
        //  */
        // videos: {}
        // /**
        //  * 角色造型
        //  */
        // styles: {}
        // style_collections: {}
        // variables: {}
        // cloud_variables: {}
        // audio: {}
        // midimusic: []
        // broadcasts: {}
        // author_nickname: string = ""
    }
    class Character {
        /**
         * 名称
         */
        name: string = ""
        /**
         * 坐标x
         */
        x: number = 0
        /**
         * 坐标y
         */
        y: number = 0
        /**
         * 大小
         */
        scale: number = 100
        /**
         * 旋转
        */
        rotation: number = 0
        rotation_type: number = 0
        id: string = ""
        draggable: boolean = false
        lock: boolean = false
        scene: ""
        workspace_offset = {
            "x": 0,
            "y": 0
        }
        styles: []
        current_style_id: ""
        visible: false
    }


}