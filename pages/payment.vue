<template>
  <div class="container">
    <v-card id="card-element" class="pa-4 ma-4"></v-card>
    <div id="payment-request-button" />
  </div>
</template>

<script>
export default {
  data: () => ({
    amount: 1000,
    cardErrorMessage: '',
    cardElement: null
  }),
  mounted() {
    const elements = this.$stripe.elements()
    const card = elements.create('card')
    card.mount('#card-element')
    card.on('change', this.showCardError)
    this.cardElement = card
    // const paymentRequest = this.$stripe.paymentRequest({
    //   country: 'JP',
    //   currency: 'jpy',
    //   total: {
    //     label: 'Demo total', // 支払いラベルを指定
    //     amount: this.amount // 支払い金額を指定
    //   },
    //   requestPayerName: true,
    //   requestPayerEmail: true
    // })

    // const elements = this.$stripe.elements()
    // const prButton = elements.create('paymentRequestButton', {
    //   paymentRequest
    // })

    // paymentRequest.canMakePayment().then((result) => {
    //   if (result) {
    //     prButton.mount('#payment-request-button')
    //   } else {
    //     document.getElementById('payment-request-button').style.display = 'none'
    //   }
    // })
  },
  methods: {
    showCardError(event) {
      if (event.error) {
        this.cardErrorMessage = event.error.message
      } else {
        this.cardErrorMessage = ''
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  min-height: 100vh;
}

#payment-request-button {
  width: 200px;
  margin: 50px auto;
}
</style>
