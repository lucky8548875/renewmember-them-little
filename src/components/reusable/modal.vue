<style lang="sass" scoped>
#backdrop
	z-index: 10
	background-color: rgba(0,0,0,0.2)

#modal
	z-index: 25
  background-color: white  
  border-right: 1px solid #eee
</style>

<script>
import Stepper from "@/components/reusable/stepper.vue";
import FileUpload from '@/components/fileupload'
export default {
	components: {
		'fileupload': FileUpload,
		stepper: Stepper
	},
	data() {
		return {
			params: {},
			visible: false
		};
	},
	methods: {
		toggle() {
			this.visible = !this.visible;
		},
		show(params){
			this.visible = true;
			this.params = params;
		},
	}
};
</script>
