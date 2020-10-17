import ActionStatus from './action-status';

Vue.component('spinner', {
    template: '<svg class="spinner animate-spin w-6 h-6" stroke="currentColor" viewBox="0 0 20 20"><g transform="translate(1.9,1.9)" fill-rule="evenodd" fill="none"><g stroke-width="2" transform="translate(1,1)"><ellipse ry="8.6124411" rx="8.6124392" style="stroke-width:2.77512;stroke-miterlimit:4;stroke-dasharray:none" cy="7.1" cx="7.1" stroke-opacity="0.5" /><path style="stroke-width:2.77512;stroke-linecap:round;stroke-miterlimit:4;stroke-dasharray:none"d="m 15.712439,7.1000019 c 0,-4.7559816 -3.856458,-8.6124415 -8.6124391,-8.6124415"/></g></g></svg>'
  })

var app = new Vue({
    el: '#home',
    data() {
        return {
            emailRegExp: /^\S+@\S+$/,
            name: '',
            email: {
                value: '',
                valid: true,
            },
            message: {
                text: '',
                maxlength: 1000,
            },
            sendStatus: new ActionStatus(),
            canSend: true
        }
    },
    methods: {

        validateEmail(email) {
            this.email.valid = this.emailRegExp.test(String(this.email.value).toLowerCase());
            console.log(this.email.value, this.email.valid);
        },

        sendData() {

            if (this.email.valid) {

                this.canSend = false;
                this.sendStatus.start();

                var params = {
                    user_name: this.name,
                    user_email: this.email.value,
                    user_message: this.message.text
                };

                emailjs.send('bom_service', 'template_VJrTe0zf', params)
                    .then(function(response) {
                        this.sendStatus.success();
                    }.bind(this), function(error) {
                        this.sendStatus.fail();
                        this.canSend = true;
                    }.bind(this));

            }
        }
        
    }
  });

//   export default {
//     components: { VueperSlides, VueperSlide }
//   }