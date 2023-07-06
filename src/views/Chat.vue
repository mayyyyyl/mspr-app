<template>
	<div>
		<vue-advanced-chat
			height="calc(100vh - 20px)"
			:current-user-id="currentUserId"
			:rooms="JSON.stringify(rooms)"
			:rooms-loaded="true"
			:messages="JSON.stringify(messages)"
			:messages-loaded="messagesLoaded"
			@send-message="sendMessage($event.detail[0])"
			@fetch-messages="fetchMessages($event.detail[0])"
		/>
	</div>
</template>

<script>
import axios from 'axios';
import { register } from 'vue-advanced-chat'
register()

const apiSersUser1 = `${process.env.VUE_APP_API}users/1/sers`
const apiUsers = `${process.env.VUE_APP_API}users`

export default {
	data() {
		return {
            users: [],
			currentUserId: '1',
			rooms: [
				{
					roomId: '1',
					roomName: 'Jules Delaveau',
					avatar: 'https://66.media.tumblr.com/avatar_c6a8eae4303e_512.pnj',
					users: [
						{ _id: '1', username: 'Antoine Poirot' },
						{ _id: '2', username: 'Jules Delaveau' }
					]
				},
                {
					roomId: '2',
					roomName: 'Elise Duflot',
					avatar: 'https://img.freepik.com/free-photo/portrait-dark-skinned-cheerful-woman-with-curly-hair-touches-chin-gently-laughs-happily-enjoys-day-off-feels-happy-enthusiastic-hears-something-positive-wears-casual-blue-turtleneck_273609-43443.jpg',
					users: [
						{ _id: '1', username: 'Antoine Poirot' },
						{ _id: '3', username: 'Elise Duflot' }
					]
				}
			],
			messages: [],
			messagesLoaded: false,
		}
	},
    created: function () {
        this.fetchData()
    },

	methods: {
		fetchMessages({ options = {} }) {
			setTimeout(() => {
				if (options.reset) {
					this.messages = this.addMessages(true)
				} else {
					this.messages = [...this.addMessages(), ...this.messages]
					this.messagesLoaded = true
				}
				// this.addNewMessage()
			})
		},

		addMessages(reset) {
			const messages = []

			for (let i = 0; i < 30; i++) {
				messages.push({
					_id: reset ? i : this.messages.length + i,
					content: `${reset ? '' : 'paginated'} message ${i + 1}`,
					senderId: '4321',
					username: 'John Doe',
					date: '13 November',
					timestamp: '10:20'
				})
			}

			return messages
		},

		sendMessage(message) {
			this.messages = [
				...this.messages,
				{
					_id: this.messages.length,
					content: message.content,
					senderId: this.currentUserId,
					timestamp: new Date().toString().substring(16, 21),
					date: new Date().toDateString()
				}
			]
		},

		addNewMessage() {
			setTimeout(() => {
				this.messages = [
					...this.messages,
					{
						_id: this.messages.length,
						content: 'NEW MESSAGE',
						senderId: '1234',
						timestamp: new Date().toString().substring(16, 21),
						date: new Date().toDateString()
					}
				]
			}, 2000)
		},
        fetchData: async function () {
              try {
                  const response = await axios.get(apiUsers)
                  console.log(response)
                  this.users = response['data']['_embedded']['users']
                  console.log(this.users)
              } catch (error) {
                  console.log(error)
              };
        },
	}
}
</script>

<style lang="scss">
body {
	font-family: 'Quicksand', sans-serif;
}
</style>
