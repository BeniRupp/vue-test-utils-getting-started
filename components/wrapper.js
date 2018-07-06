import hello from "./hello"
import box from "./box"

export default {
    template: `
          <div>
            <box>
                <hello v-if="false" class=".hello-message"/>
            </box>
        </div>
        `,
    components: {
        'hello': hello,
        'box': box,
    },
    data() {
        return {
            show: false,
        }
    }
}
