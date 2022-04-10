<template>
  <PublicLayout>
    <div class="container-fluid">
      <div
        class="
          row
          row-cols-1
          row-cols-sm-1
          row-cols-md-1
          row-cols-lg-1
          row-cols-xl-2
          row-cols-xxl-2
          g-4
        "
      >
        <div class="col">
          <h2>Startup checkpoints</h2>
          <table>
            <tr>
              <td>
                <Checkbox
                  id="CtokenCreated"
                  v-model="CtokenCreated"
                  :binary="true"
                />
              </td>
              <td>
                <span
                  style="cursor: pointer"
                  @click="CtokenCreated = !CtokenCreated"
                >
                  Create your token. Use AWallet capabilities of doing multisign
                  operations to ensure enterprise level security or vanity
                  account.
                </span>
                <a target="_blank" href="https://www.a-wallet.net"
                  >Create your wallet</a
                >
              </td>
              <td>
                <button class="btn btn-primary form-control">Help</button>
              </td>
            </tr>
            <tr>
              <td><Checkbox /></td>
              <td>
                Ensure decentralized onchain decision making using open
                specifications and open source applications. Vote coin now
                allows also encrypted voting, so that nobody can see other vote
                cast while voting session is in progress.
                <a target="_blank" href="https://www.vote-coin.com"
                  >www.vote-coin.com</a
                >
              </td>
            </tr>
            <tr>
              <td><Checkbox /></td>
              <td>
                Issue your tokens at exchanges.
                <a target="_blank" href="https://app.algodex.com">Algodex</a> -
                onchain orderbook trading platform, Automated market maker smart
                contract webs -
                <a target="_blank" href="https://app.pact.fi">Pact.Fi</a>,
                <a target="_blank" href="https://app.tinyman.com">TinyMan</a>,
                <a target="_blank" href="https://app.algofi.org/swap">AlgoFi</a
                >,
                <a target="_blank" href="https://app.humble.sh/pool"
                  >HumbleSwap</a
                >. We recommend to start with Pact.Fi 0,01% pool fee and TinyMan
                and distribute AMM staking using tool below.
              </td>
            </tr>
            <tr>
              <td><Checkbox /></td>
              <td>
                Check your ASA price development at
                <a target="_blank" href="https://tinychart.org/asset/452399768"
                  >tinychart.org</a
                >.
              </td>
            </tr>
            <tr>
              <td><Checkbox /></td>
              <td>
                Start building your community at discord. Customize our
                <a
                  target="_blank"
                  href="https://github.com/scholtz/vote_coin-chatbot/"
                  >open source AI powered chat bot</a
                >
                for your needs.
              </td>
            </tr>
            <tr>
              <td><Checkbox /></td>
              <td>
                Motivate people to hold your ASA - give them percentage of
                return if they own minimum trashold - community staking program.
                <a
                  target="_blank"
                  href="https://github.com/scholtz/AlgorandStakingBot"
                  >https://github.com/scholtz/AlgorandStakingBot</a
                >
              </td>
            </tr>
            <tr>
              <td><Checkbox /></td>
              <td>
                Motivate people to hold your ASA in AMM pools - give liquidity
                providers percentage of return if they hold the money at the
                pool of your selection
                <a
                  target="_blank"
                  href="https://github.com/scholtz/AlgorandAMMStakingBot"
                  >https://github.com/scholtz/AlgorandAMMStakingBot</a
                >
              </td>
            </tr>
            <tr>
              <td><Checkbox /></td>
              <td>
                Deliver your tokens to the investors on the market - define and
                publish easy to understand and verifiable rules, and earn money
                for your DAO activities
                <a target="_blank" href="https://github.com/scholtz/tinyman-bot"
                  >https://github.com/scholtz/tinyman-bot</a
                >
              </td>
            </tr>
            <tr>
              <td><Checkbox /></td>
              <td>
                Make your DAO visible in the ecosystem - Publish your products
                and services also to our algorand directory.
                <a target="_blank" href="https://www.a-dir.net"
                  >https://www.a-dir.net</a
                >
              </td>
            </tr>
            <tr>
              <td><Checkbox /></td>
              <td>
                Use our authentication tools. Open source ARC-0014 standard
                implementation for algorand authentication, and hasura graphQL
                server authentication webhook which allows verifying ARC-0014
                authentication token and serving graphql data using asynchronous
                subscriptions and providing users with the real time
                authenticated data on your website.
                <a
                  target="_blank"
                  href="https://github.com/scholtz/AlgorandAuthenticationDotNet"
                  >https://github.com/scholtz/AlgorandAuthenticationDotNet</a
                >,
                <a
                  target="_blank"
                  href="https://github.com/scholtz/HasuraAlgorandAuthWebHook"
                  >https://github.com/scholtz/HasuraAlgorandAuthWebHook</a
                >
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </PublicLayout>
</template>

<script>
import PublicLayout from "../layouts/Public.vue";
import Checkbox from "primevue/checkbox";

export default {
  components: {
    PublicLayout,
    Checkbox,
  },
  data() {
    return {
      CtokenCreated: true,
    };
  },
  watch: {
    CtokenCreated() {
      return localStorage.setItem("CtokenCreated", !!this.CtokenCreated);
    },
  },
  mounted() {
    this.CtokenCreated = !!localStorage.getItem("CtokenCreated");
  },
};
</script>